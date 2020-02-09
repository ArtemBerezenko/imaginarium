import React, {Component} from 'react'
import ApiService from '../service/ApiService';

class CreateGameComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            participantsNumber: '',
        };

        // this.createGame = this.createGame.bind(this);
    }

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    createGame = (e) => {
        e.preventDefault();
        let game = {
            participantsNumber: this.state.participantsNumber,
        };
        ApiService.createGame(game)
            .then(() => {
                this.setState({message: 'Game created successfully.'});
                this.props.history.push('/login');
            });
    };

    render() {
        return (
            <div>
                <h1>Let's start the Game!</h1>
                <div className="container">
                    Enter number of participants: <input type="number" name="participantsNumber"
                                                         value={this.state.participantsNumber}
                                                         onChange={this.onChange}/>
                    <button className="btn-success" style={{width: '100px'}}
                            onClick={this.createGame}>Create Game
                    </button>
                </div>
            </div>
        )
    }
}

export default CreateGameComponent