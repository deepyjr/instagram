import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));

const Login = () => {
  fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => {
    console.table(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))
  
    const classes = useStyles();
    return (
        <div className="Global-Login">
            <img src="./TelHomepage.png" alt="tel"></img>
            <div className="Login-Box">
            <div className="Logo-Login"></div>
            <h2>Se connecter</h2>
            
            <form className={classes.root} noValidate autoComplete="off">

                <TextField className="Insert-Mail" id="outlined-basic" label="Mail" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />

                <Button variant="contained" color="primary">
                Hello World
                 </Button>
            </form>
           
            </div>
        </div>
        
    );
}

export default Login;