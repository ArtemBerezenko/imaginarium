import React, { Component } from 'react'
import ApiService from '../service/ApiService';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: 'admin',
            avatar: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        ApiService.addUser(this.state.login)
            .then(() => {
                debugger
                this.setState({message: 'User added successfully.'});
                this.props.history.push('/rating');
            });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Imaginarium</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    Enter your login: <input type="text" name="username" value={this.state.login} onChange={this.handleChange} />
                    {/*Avatar: <input type="password" name="password" value={this.state.avatar} onChange={this.handleChange} />*/}
                    <button className="btn btn-success" onClick={this.loginClicked}>Join</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent