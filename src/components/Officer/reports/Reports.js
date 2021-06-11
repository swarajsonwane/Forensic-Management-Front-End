import React ,{useState ,useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import  DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {Link} from 'react-router-dom';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const  Reports =()=> {
    const [pdfFile, setpdfFile] = useState(null);
     const [reports, setReports] = useState([]);

     
    const fetchreports = ()=> {
        axios.get("http://localhost:5000/reports")
        .then((res) => {
            const report = res.data;
            setReports(report);
        })
        .catch(error => console.error(`error: ${error}`));
      }

      useEffect(() => {
      fetchreports();
    });

    const onDelClick =(id) =>{
        if (window.confirm('Are you sure to delete?')) {
            axios.delete(`http://localhost:5000/document/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error(`error: ${error}`));
        }
    }

    const onViewClick = (id) =>{
      
        console.log("view");
          
    }

    const useStyles = makeStyles((theme) => ({
       
        card: {
          maxWidth: 250,
          margin: 'auto',
          
          marginTop:'10px',
          justifyContent: 'start',
          padding: 10,
    
        },
      
        toolbarMargin: theme.mixins.toolbar
      }));
    return (
      <div
        className="create-profile"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Reports</h1>
              <p className="lead text-center">
                Please review 
              </p>
              {reports.map((report) => (
                <Card className={useStyles.card}>
                  <CardHeader title={`Document : ${report.id}`} />
                  <CardContent>
                  <PictureAsPdfIcon/>
                    <span style={{ padding: "20px" }}>
                      <Typography variant="overline">
                        <b>{report.docs}</b>
                      </Typography>
                      
                    </span>
                   
                  </CardContent>
                  <CardActions disableActionSpacing>
                    <IconButton
                      onClick={() => {
                        onDelClick(report.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link
                      to={`/view-reports/${report.id}`}
                    >
                      <IconButton >
                         
                        <VisibilityIcon />
                      </IconButton>
                    </Link>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Reports;
