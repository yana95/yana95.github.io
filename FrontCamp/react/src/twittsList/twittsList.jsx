import React from 'react';
import Twitt from '../twitt/twitt';
import {fetchDeleteTwitt} from './../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeleteTwitt: (index) => dispatch(fetchDeleteTwitt(index))
    }
};

class TwittsList extends React.Component {
    deleteTwitt(id){
        this.props.fetchDeleteTwitt(id);
    }

    render(){
        return (
            <div>
                {
                    this.props.twitts.map(item => (
                        <Twitt item={item} key={item.ID} deleteTwitt={() => this.deleteTwitt(item.ID)}/>
                    ))
                }
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(TwittsList);
