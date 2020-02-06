import React , {Component } from 'react'
import "./subscribe.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../API/index'



class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username:'',
      realname:'',
      password_hash:'',
      avatar: '',
      location:'',
      description:''
    }
}
 
handleChangeInputUsername = async event => {
  const username = event.target.value
  this.setState({ username })
}
handleChangeInputRealname = async event => {
  const realname = event.target.value
  this.setState({ realname })
}
handlePassword = async event => {
  const password_hash = event.target.value
  this.setState({ password_hash })
}
handleChangeInputAvatar = async event => {
  const avatar = event.target.value
  this.setState({ avatar })
}
handleChangeInputLocation = async event => {
  const location = event.target.value
  this.setState({ location })
}

handleChangeDescription = async event => {
  const description = event.target.value
  this.setState({ description })
}

handleIncludeUser = async () => {
  const { username, realname, password_hash, avatar, location, description } = this.state
  const payload = { username, realname, password_hash, avatar, location, description }

  await api.addUser(payload).then(res => {
      window.alert(`User inserted successfully`)
      this.setState({
        username:'',
        realname:'',
        password_hash:'',
        avatar: '',
        location:'',
        description:''
      })
  })
}
  
    
  render(){
      const { username, realname, password_hash, avatar, location, description} = this.state
     
      return (
        <div className="Global-Login">
            <img src="./TelHomepage.png" alt="tel" className="login-pic"></img>
            <div className="Sub-Box">
            <div className="Logo-Login"></div>
            <h2>S'inscrire</h2>
            
            <form className="root" noValidate autoComplete="off">
              <div className="form-item">
                <TextField  label="Username" variant="outlined" value={username} onChange={this.handleChangeInputUsername}/>
              </div>
              <div className="form-item">
                <TextField  label="RealName" variant="outlined" value={realname} onChange={this.handleChangeInputRealname}/>
                </div>
              <div className="form-item">
                <TextField  label="avatar" variant="outlined"value={avatar} onChange={this.handleChangeInputAvatar} />
                </div>
              <div className="form-item">
                <TextField  label="Password" variant="outlined" type="password" value={password_hash} onChange={this.handlePassword}/>
                </div>
              <div className="form-item">
                <TextField  label="Location" variant="outlined" value={location} onChange={this.handleChangeInputLocation}/>
                </div>
              <div className="form-item">
                <TextField  label="Description" variant="outlined" value={description} onChange={this.handleChangeDescription} />
              </div>
                
              <div className="button-form">
                <div className="leftButton">
                  <Button  variant="contained" color="primary" onClick={this.handleIncludeUser}>
                  S'inscrire
                  </Button>
                </div>
                <Button variant="contained" color="primary" href="/login">
                  Retours
                </Button>
              </div>
                
            </form>
           
            </div>
        </div>
        
    );
    }
    
}

export default Login;