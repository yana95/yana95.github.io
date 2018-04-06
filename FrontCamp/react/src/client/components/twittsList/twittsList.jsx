import React from 'react';
import Twitt from '../twitt/twitt';
import {fetchDeleteTwitt, fetchGetTwitts, filter} from './../../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    if(state.filter === 'all'){
        return {twitts:state.twitts}
    } else{
        return {twitts: state.twitts.filter(item => {
            if(item.author === state.filter){
                return true;
            }
        })}
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeleteTwitt: (index) => dispatch(fetchDeleteTwitt(index)),
        fetchGetTwitts: () => dispatch(fetchGetTwitts())
    }
};

export class TwittsList extends React.Component {
    deleteTwitt(id){
        this.props.fetchDeleteTwitt(id);
    }
    componentDidMount(){
        this.props.fetchGetTwitts();
    }
    render(){
        return (
            <React.Fragment>
                {
                    this.props.twitts.map(item => (
                        <Twitt item={item} key={item.ID} deleteTwitt={() => this.deleteTwitt(item.ID)}/>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TwittsList);
