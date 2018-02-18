import React from 'react';
import { render } from 'react-dom';
import styles from './addNewTwitForm.scss';
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
            this.props.onAdd(text,author);
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
    render(){
        return (
            <div className="add-new">
                <h3>Add new twit</h3>
                <input type="text" placeholder="Your name" className={this.state.invalidAuthor? 'invalid':''} onChange={this.changeAuthorHandler.bind(this)} />
                <textarea rows="4" placeholder="Your text" className={this.state.invalidText? 'invalid':''} onChange={this.changeTextHandler.bind(this)}></textarea>
                <div className="controls">
                    <button className="add" onClick={this.addHandler.bind(this, this.state.text, this.state.author)}></button>
                    <button className="cancel" onClick={this.props.onCancel}></button>
                </div>
            </div>
        );
    }
}

export default AddNewTwitForm;
