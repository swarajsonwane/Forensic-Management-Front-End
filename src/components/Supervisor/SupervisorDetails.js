import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import  DeleteIcon from '@material-ui/icons/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

const SupervisorDetails =()=> {

    const [supervisors, setSupervisors] = useState([]);
    
   
    const fetchSupervisorsDetails = ()=> {
        axios.get("http://localhost:5000/supervisordetails")
        .then((res) => {
            const sup = res.data;
            setSupervisors(sup);
        })
        .catch(error => console.error(`error: ${error}`));
      }

      useEffect(() => {
      fetchSupervisorsDetails();
    });
    const onDelClick =(id) =>{
        if (window.confirm('Are you sure to delete?')) {
            axios.delete(`http://localhost:5000/supervisor/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error(`error: ${error}`));
        }
    }

    const onCheckClick = (id) =>{
        axios.get(`http://localhost:5000/supervisor/accept/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.error(`error: ${error}`));
    }
    const useStyles = makeStyles((theme) => ({
       
        card: {
          maxWidth: 300,
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
              <h1 className="display-4 text-center">Supervisors</h1>
              <p className="lead text-center">
                Please review and aboard superviors to system
              </p>
              {supervisors.map((supervisor) => (
                <Card className={useStyles.card}>
                  <CardHeader
                    title={`${supervisor.name}`}
                    avatar={
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    }
                  />
                  <CardContent>
                     <span style={{padding:'20px'}}>
                     <Typography variant="overline">
                      <b>Email : </b>
                    </Typography>
                    <Typography variant="caption">
                      <b>{supervisor.email}</b>
                    </Typography>
                    </span> 
                    <span style={{padding:'20px'}}>
                    <Typography variant="overline">
                      <b>URN : </b>
                    </Typography>
                    <Typography variant="caption">
                      <b>{supervisor.urn}</b>
                    </Typography>
                    </span>
                    <span style={{padding:'20px'}}>
                    <Typography variant="overline">
                      <b>District : </b>
                    </Typography>
                    <Typography variant="caption">
                      <b>{supervisor.district}</b>
                    </Typography>
                    </span>
                    <span >
                    <p style={{marginLeft:'36px'}}>
                    <Typography variant="overline">
                      <b>Bio : </b>
                    </Typography>
                    <Typography variant="caption">
                      <b>{supervisor.bio}</b>
                    </Typography>
                    </p>
                    </span>
                  </CardContent>
                  <CardActions disableActionSpacing>
                    <IconButton
                      onClick={() => {
                        onDelClick(supervisor.id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        onCheckClick(supervisor.id);
                      }}
                    >
                      <CheckIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SupervisorDetails;
