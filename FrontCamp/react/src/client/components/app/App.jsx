import React from 'react';
import { render } from 'react-dom';
import styles from './app.scss';

class App extends React.Component {
    render(){
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        );
    }
}

export default  App;
