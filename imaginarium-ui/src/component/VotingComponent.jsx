import React, {Component} from 'react'
import ApiService from '../service/ApiService';

class VotingComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vote: ''
        };
    }

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
        return (
            <div>
                <h1>So, give your vote</h1>
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