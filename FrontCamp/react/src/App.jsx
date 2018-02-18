import React from 'react';
import { render } from 'react-dom';
import styles from './app.scss';
import date from 'date-and-time';
import AddNewTwitForm from './addNewTwitForm/addNewTwitForm';
import Twitt from './twitt/twitt';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            twitts: [],
            showForm: false,
            filter: 'all'
        }
    }
    toggleForm(){
        this.setState({showForm:!this.state.showForm});
    }
    addTwitt(text,author){
        let newTwitt = {}
        let now = new Date();
        newTwitt.date = date.format(now, 'YYYY/MM/DD');
        newTwitt.text = text;
        newTwitt.author = author;
        newTwitt.id = now.getTime();
        let arr = this.state.twitts;
        arr.push(newTwitt);
        this.setState({twitts: arr});
        this.toggleForm();
    }
    deleteTwitt(id){
        let idx;
        let newTwitts = this.state.twitts;
        newTwitts.map((item, i) => {
            if(item.id === id){
                idx = i;
            }
        });
        newTwitts.splice(idx, 1);
        this.setState({twitts: newTwitts});
    }
    showAll(){
        this.setState({filter:'all'});
    }
    authorFilter(e){
        this.setState({filter:e.target.value});
    }
    filter(){
        let twitts;
        if(this.state.filter === 'all'){
            twitts = this.state.twitts.map(item => (
                <Twitt twitt={item} key={item.id} deleteTwitt={this.deleteTwitt.bind(this, item.id)}/>
            ));
        } else{
            twitts = this.state.twitts.map(item => {
                if(item.author === this.state.filter){
                    return <Twitt twitt={item} key={item.id} deleteTwitt={this.deleteTwitt.bind(this, item.id)}/>;
                }
            });
        }
        return twitts;
    }
    render(){
        let form;
        if(this.state.showForm){
            form = <AddNewTwitForm onCancel={this.toggleForm.bind(this)} onAdd={this.addTwitt.bind(this)}/>
        }
        const twitts = this.filter();
        return (
            <div className="main-container">
                <div className="header">
                    <h1>CustomTwitter</h1>
                    <button className="add-new-twit" onClick={this.toggleForm.bind(this)}></button>
                    <div className="filter">
                        <ul>
                            <li>
                                <span onClick={this.showAll.bind(this)}>show all</span>
                            </li>
                            <li>
                                <span>show post by</span>
                                <input type="text" onChange={this.authorFilter.bind(this)} onBlur={(e)=>{e.target.value =''}}/>
                            </li>
                        </ul>
                    </div>
                </div>
                {form}
                {twitts}
            </div>
        );
    }
}

render(<App />, document.querySelector('#app'));
