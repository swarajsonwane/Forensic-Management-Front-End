import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';

class App extends React.Component{
  useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
       
        margin: theme.spacing(18),
      marginTop:'20px',
      marginLeft:'30px'
      },
    },
    toolbarMargin: theme.mixins.toolbar
  }));
 
  render()
  {
    
    return (

     <div >
       <div className="bg" />
       <HomeNavbar/>
       <Box mx="auto" className={this.useStyles.root}>
       <Box pt={10} >
       
       <Button component={Link} to="/login" variant="outlined" style={{margin:40}}>Admin</Button>
<Button variant="outlined" color="primary" style={{margin:40}}>
  Officer
</Button>
<Button variant="outlined" color="secondary" style={{margin:40}}>
  Supervisor
</Button>

<Button variant="outlined" color="primary" href="#outlined-buttons" style={{margin:40}}>
 Client
</Button>
<Button variant="outlined"  style={{margin:40}} disabled>
  Disabled
</Button>
</Box>
</Box>
      </div>
    );
  }
};

export default App;