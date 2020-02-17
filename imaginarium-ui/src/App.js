import './App.css';
import React, {Component} from 'react';
import RoutingApp from './component/RoutingApp.jsx';

class App extends Component {
    render() {
        return (
            <div className="container">
                <RoutingApp />
            </div>
        );
    }
}

export default App;
