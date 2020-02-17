import React, {Component} from 'react'
import ApiService from "../service/ApiService";
// import SpinnerComponent from "./SpinnerComponent";

class GameComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null,
            loading: true
        };
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.collectAllVotes()
            .then((res) => {
                this.setState({users: res.data});
                this.setState({loading: false});
            });
    }

    getRating() {
        this.props.history.push('/rating');
    }

    render() {
        // if (this.state.loading) return <SpinnerComponent />;
        return (
            <div>
                <h2 className="text-center">Table of rating:</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Login</th>
                        <th>Vote</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.login}</td>
                                    <td>{user.vote}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-danger" onClick={() => this.getRating()}> See Rating
                    </button>
                </div>
            </div>
        );
    }

}

export default GameComponent;