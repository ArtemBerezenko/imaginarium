import React, {Component} from 'react'
import ApiService from '../service/ApiService';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            rating: '',
            vote: '',
            avatar: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked = (e) => {
        e.preventDefault();
        sessionStorage.setItem('user', this.state.login)
        let user = {
            login: this.state.login,
            rating: this.state.rating
        };
        ApiService.addUser(user)
            .then(() => {
                this.setState({message: 'User added successfully.'});
                this.props.history.push('/rating');
            });
    };

    render() {
        return (
            <div>
                <h1>Welcome to Game!</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    Enter your login: <input type="text" name="login" value={this.state.login}
                                             onChange={this.handleChange}/>
                    {/*Avatar: <input type="password" name="password" value={this.state.avatar} onChange={this.handleChange} />*/}
                    <button className="btn-success" style={{width: '100px'}}
                            onClick={this.loginClicked}>Join</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent