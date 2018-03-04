import React from 'react';
import { render } from 'react-dom';
import styles from './header.scss';
import { connect } from 'react-redux';
import {filterTwitts} from './../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        filterTwitts: (query) => dispatch(filterTwitts(query))
    }
};

class Header extends React.Component {
    transit() {
        this.props.history.push('/create');
    }
    showAll(){
        this.props.filterTwitts('all');
        this.props.history.push('/filter/all');
    }
    authorFilter(e){
        console.log(this.props);
        this.props.filterTwitts(e.target.value);
        this.props.history.push(`/filter/${e.target.value}`);
    }
    render(){
        return (
            <div className="header">
                <h1>CustomTwitter</h1>
                <button className="add-new-twit" onClick={() => this.transit()}></button>
                <div className="filter">
                    <ul>
                        <li>
                            <span onClick={() => this.showAll()}>show all</span>
                        </li>
                        <li>
                            <span>show post by</span>
                            <input type="text" onChange={(e) => this.authorFilter(e)} onBlur={(e)=>{e.target.value =''}}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Header);
