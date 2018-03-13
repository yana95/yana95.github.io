import React from 'react';
import Header from '../components/header/header';
import TwittsList from '../components/twittsList/twittsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        twitts: state.twitts,
    };
};

const MainPage = (props) => (
    <div>
        <Header history={props.history} />
        <TwittsList {...props}/>
    </div>
);

export default connect(mapStateToProps)(MainPage);