import React, {Component} from 'react'
import ApiService from '../service/ApiService';

class VotingComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vote: '',
            leader: ''
        };
    }

    getLeader = () => {
        ApiService.getLeader()
            .then((res) => {
                this.setState({leader: res.data});
            });
    };

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    voting = (e) => {
        e.preventDefault();
        ApiService.startVoting(sessionStorage.getItem('user'), this.state.vote)
            .then(() => {
                this.setState({message: 'You gave your vote successfully.'});
                this.props.history.push('/game');
            });
    };

    render() {
        this.getLeader();
        return (
            <div>
                <h1>So, what you think, where {this.state.leader}'s card?</h1>
                <div className="container">
                    Enter your vote: <input type="number" name="vote"
                                                         value={this.state.vote}
                                                         onChange={this.onChange}/>
                    <button className="btn-success" style={{width: '100px'}}
                            onClick={this.voting}>Push the button
                    </button>
                </div>
            </div>
        )
    }
}

export default VotingComponent