import React from 'react';
import { render } from 'react-dom';
import styles from './header.scss';
import { connect } from 'react-redux';
import {changeFilter, filterItems} from './../../../actions';

const mapStateToProps = (state) => {
    if(state.filter !== 'all'){
        return {filter: state.filter}
    } else {
        return {filter: ''}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (query) => dispatch(changeFilter(query)),
    }
};

export  class Header extends React.Component {
    transit() {
        this.props.history.push('/create');
    }
    showAll(){
        this.props.changeFilter('all');
        this.props.history.push('/filter/all');
    }

    authorFilter(e){
        this.props.changeFilter(e.target.value);
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
                            <input type="text" value={this.props.filter} onChange={(e) => this.authorFilter(e)} onBlur={(e)=>{e.target.value =''}}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
