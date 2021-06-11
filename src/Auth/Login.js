import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import {loginUser} from '../actions/authActions';
import {bindActionCreators} from 'redux';
import {connect } from 'react-redux';


class Login extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state ={
            email:'',
            password:'',
            errors:[],
            open:true,
        };
        this.handleLogin=this.handleLogin.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
   
    static propTypes = {
      history: PropTypes.object.isRequired
    }
  
   
     useStyles = makeStyles((theme) => ({
       
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

    handleChange = event =>
    {
        this.setState({[event.target.name]:event.target.value});
    }
    handlOpen = ()=>
    {
        this.setState({open:true});
    }

    handleClose = ()=>
    {
        this.setState({open:false});
    }

    handleLogin = event =>
    {
     
      event.preventDefault();
      axios
      .post('http://localhost:5000/admin/login',{
            email:this.state.email,
            password:this.state.password
        })
        .then(
          (res) =>{
            if(res.status!==400 && res.status!==404)
            {
              localStorage.setItem('user', this.state);
                 this.props.history.push(`/dashboard`)
            }
            else
            {
              this.props.history.push(`/`)

            }
          }
        )
        .then(this.props.loginUser(this.state))
        .catch(err => console.log(err));
        console.log(this.state);
        this.handleClose();
    }
    render()
    {
        return (
            <div>
                
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
               
                <DialogTitle id="form-dialog-title"> <Typography variant="h5"><b>Login</b></Typography></DialogTitle>
                <DialogContent autoComplete="off">
                <form action="/" className={this.useStyles.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.useStyles.submit}
            onClick={this.handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

Login = withRouter(Login);
const   mapStateToProps  = (state) =>
({
  auth:state.auth
});
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators({
      loginUser: loginUser,
  }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
