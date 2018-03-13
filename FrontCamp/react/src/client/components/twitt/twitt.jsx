import React from 'react';
import { render } from 'react-dom';
import styles from './twitt.scss';
const Twitt = (props) => {
    return (
        <div className="twitt">
            <button className="delete" onClick={props.deleteTwitt}></button>
            <p>{props.item.text}</p>
            <div className="info">
                <span className="time">{props.item.date}</span>
                <span className="author">{props.item.author}</span>
            </div>
        </div>
    );
}

export default Twitt;
