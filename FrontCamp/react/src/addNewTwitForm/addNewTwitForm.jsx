import React from 'react';
import { render } from 'react-dom';
import styles from './addNewTwitForm.scss';
import date from 'date-and-time';
import {addTwitt} from './../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        addTwitt: (newTwitt) => dispatch(addTwitt(newTwitt))
    }
};

class AddNewTwitForm extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '',
            author: '',
            invalidText: false,
            invalidAuthor:false
        }
    }
    addHandler(text,author){
        if(text && author){
            let newTwitt = {}
            let now = new Date();
            newTwitt.date = date.format(now, 'YYYY/MM/DD');
            newTwitt.text = text;
            newTwitt.author = author;
            newTwitt.id = now.getTime();
            this.props.addTwitt(newTwitt);
            this.props.history.push('/');
        } else {
            if(!text){
                this.setState({invalidText: true});
            }
            if (!author) {
                this.setState({invalidAuthor: true});
            }
        }

    }
    changeTextHandler(e){
        this.setState({invalidText: false});
        this.setState({
            text:e.target.value
        })
    }
    changeAuthorHandler(e){
        this.setState({invalidAuthor: false});
        this.setState({
            author:e.target.value
        })
    }
    onCancel(){
        this.props.history.push('/');
    }
    render(){
        return (
            <div className="add-new">
                <h3>Add new twit</h3>
                <input type="text" placeholder="Your name" className={this.state.invalidAuthor? 'invalid':''} onChange={(e) => this.changeAuthorHandler(e)} />
                <textarea rows="4" placeholder="Your text" className={this.state.invalidText? 'invalid':''} onChange={(e) => this.changeTextHandler(e)}></textarea>
                <div className="controls">
                    <button className="add" onClick={() => this.addHandler(this.state.text, this.state.author)}></button>
                    <button className="cancel" onClick={() => this.onCancel()}></button>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddNewTwitForm);
