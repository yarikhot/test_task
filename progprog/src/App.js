import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindAll} from 'lodash';


import './App.css';

class App extends Component {

    static propTypes={
    };

    constructor(props) {
        super(props);

        this.state = {
            path: {
                id:'',
                distance:''
            }
        };

        bindAll(this, ['addPath']);
    }

    addPath () {
        console.log('path');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Saunter</h1>
                    <button onClick={this.addPath}>add path</button>
                </header>
            </div>
        );
    }
}

export default App;
