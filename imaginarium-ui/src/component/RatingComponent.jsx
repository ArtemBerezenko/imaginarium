import React, {Component} from 'react'
import ApiService from "../service/ApiService";

class RatingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        };
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.getGameRating()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    startVoting() {
        this.props.history.push('/startVoting');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Table of rating:</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Login</th>
                        <th>Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.login}</td>
                                    <td>{user.rating}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-danger" onClick={() => this.startVoting()}> Start Voting
                    </button>
                </div>
            </div>
        );
    }

}

export default RatingComponent;