import React from 'react';
import Twitt from '../twitt/twitt';
import {removeTwitt} from './../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        removeTwitt: (index) => dispatch(removeTwitt(index))
    }
};

class TwittsList extends React.Component {
    deleteTwitt(id){
        let idx;
        this.props.twitts.map((item, i) => {
            if(item.id === id){
                idx = i;
            }
            return;
        });
        this.props.removeTwitt(idx);
    }

    render(){
        return (
            <div>
                {
                    this.props.twitts.map(item => (
                        <Twitt item={item} key={item.id} deleteTwitt={() => this.deleteTwitt(item.id)}/>
                    ))
                }
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TwittsList);
