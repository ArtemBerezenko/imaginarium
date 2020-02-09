import '../App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import RatingComponent from './RatingComponent';
import CreateGameComponent from "./CreateGameComponent";
import VotingComponent from "./VotingComponent";
import GameComponent from "./GameComponent";

class InstructorApp extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div className="col-md-6">
                        <h1 className="text-center" style={style}>Imaginarium</h1>
                        <Switch>
                            <Route path="/createGame" exact component={CreateGameComponent}/>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" exact component={LoginComponent}/>
                            <Route path="/rating" exact component={RatingComponent}/>
                            <Route path="/startVoting" exact component={VotingComponent}/>
                            <Route path="/game" exact component={GameComponent}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

const style = {
    color: 'red',
    margin: '10px'
};

export default InstructorApp