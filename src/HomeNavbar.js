import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

function HomeNavbar() {
    
        return (
            <div className="App">
            <AppBar position="fixed" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Forensic Management 
                </Typography>
                <Typography style={{ fontFamily: 'cursive', fontSize: '25 px', marginLeft: '50%' }}>
                <Button color="inherit" onClick = {()=>localStorage.clear()}>Logout</Button>
        
                            </Typography>
              </Toolbar>
        
            </AppBar> 
            <Toolbar/>
          </div>
          );
    
}

export default HomeNavbar
