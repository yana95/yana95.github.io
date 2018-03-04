import React from 'react';
import { render } from 'react-dom';
import styles from './app.scss';
import date from 'date-and-time';
import AddNewTwitForm from '../addNewTwitForm/addNewTwitForm';
import Twitt from '../twitt/twitt';
import Header from '../header/header';
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
