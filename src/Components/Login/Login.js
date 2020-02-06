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


    const classes = useStyles();
    return (
        <div className="Global-Login">
            <img src="./TelHomepage.png" alt="tel"></img>
            <div className="Login-Box">
            <div className="Logo-Login"></div>
            <h2>Se connecter</h2>
            
            <form className={classes.root} noValidate autoComplete="off">

                <TextField className="UserName" id="outlined-basic" label="UserName" variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                <h3>Vous n'avez pas de compte ? <strong><a href="/subscribe">S'inscrire</a></strong></h3>

                <Button variant="contained" color="primary">
                Se connecter
                 </Button>
            </form>
           
            </div>
        </div>
        
    );
}

export default Login;