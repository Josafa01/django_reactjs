import React from 'react';
import UserLists from './UserLists';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        var url = 'http://127.0.0.1:8000/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                this.setState({token: data.token});
            });
        event.preventDefault();
      }

      logout(){
          localStorage.removeItem('token');
          this.setState({token: null});
      }
    
      render() {
        var token = localStorage.getItem('token');

        if(!token)
            return (
            <div className="container">
                <h2 className="mb-5 mt-4 text-center">Login</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    value={this.state.password} onChange={this.handleChangePassword} />
                </div>
                <input type="submit" value="Submit" />
                </form>
            </div>
            
            );
        else
            return (
                <div className="container">
                    <UserLists />
                    <button className="mt-4" onClick={() => this.logout()}> Logout </button>
                </div>
            )
            
      }
}