import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import RatingComponent from './RatingComponent';

class InstructorApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/rating" exact component={RatingComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}
export default InstructorApp