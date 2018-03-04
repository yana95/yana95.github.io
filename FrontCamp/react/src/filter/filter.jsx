import React from 'react';
import TwittsList from '../twittsList/twittsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        twitts: state.twitts,
        filter: state.filter
    };
};

class Filter extends React.Component {
    filter(){
        console.log(this.props.filter);
        if(this.props.filter === 'all'){
            return this.props.twitts;
        } else{
            return this.props.twitts.filter(item => {
                if(item.author === this.props.filter){
                    return true;
                }
            });
        }
    }render(){
        const twitts = this.filter();
        console.log(twitts);
        return (
            <div>
                <TwittsList twitts={twitts}/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Filter);
