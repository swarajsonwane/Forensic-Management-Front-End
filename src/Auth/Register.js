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
import {connect } from 'react-redux';
import {registerUser} from '../actions/authActions';
import {bindActionCreators} from 'redux';


class Register extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state ={
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            errors:[],
            open:true,
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
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

   
    isFormEmpty = ({username,email,password,passwordConfirmation})=>{
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;

    }

    validPassword = ({password,passwordConfirmation})=>{
        if(password.length <6 || passwordConfirmation<6)
        {
            return false;

        }
        else if(password!==passwordConfirmation)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    isFormValid = ()=>
    {

        let errors=[];
        let error;
        if(this.isFormEmpty(this.state))
        {
            error = {message:'Fill in all details'};
            this.setState({errors:errors.concat(error)});
            return false;
        }
        else if(!this.validPassword(this.state))
        {
            error = {message:'Invalid Password'};
            this.setState({errors:errors.concat(error)});
            return false;
        }
        else
        {
            return true;
        }
    }
    displayErrors = errors => errors.map((error,i)=><p key={i}>{error.message}</p>)

    handleSubmit = event =>
    {
       
      event.preventDefault();
      
     
      if(this.isFormValid())
      {
        console.log(this.state);
        const newUser ={
          username:this.state.username,
          email:this.state.email,
          password:this.state.password,
          passwordConfirmation:this.state.passwordConfirmation
        }; 

        this.props.registerUser(newUser);

        // axios.post('admin/register',newUser)
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
        this.handleClose();
      } 
      else
      {
         
        
          console.log("Invalid Form");
      }
        
        
    }
    render()
    {

      const {user}  = this.props.auth;
     
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
               
                <DialogTitle id="form-dialog-title"> <Typography variant="h5"><b>Register</b></Typography></DialogTitle>
                <DialogContent autoComplete="off">
                <form className={this.useStyles.form} noValidate>
                <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoComplete="name"
            autoFocus
            onChange={this.handleChange}
          /> 
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
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Confirm Password"
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
            onClick={this.handleSubmit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Login" variant="body2">
                {"Already a user? Login"}
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


const   mapStateToProps  = (state) =>
({
  auth:state.auth
});
function mapDispatchToProps(dispatch, props) {
  return bindActionCreators({
      registerUser: registerUser,
  }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
