import './App.css';
import React, {Component} from 'react';
import InstructorApp from './component/InstructorApp.jsx';

class App extends Component {
    render() {
        return (
            <div className="container">
                <InstructorApp />
            </div>
        );
    }
}

export default App;
