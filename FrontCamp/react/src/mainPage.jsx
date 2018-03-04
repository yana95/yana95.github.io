import React from 'react';
import Header from './header/header';
import TwittsList from './twittsList/twittsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        twitts: state.twitts,
    };
};

const MainPage = (props) => (
    <div>
        <Header {...props} />
        <TwittsList {...props}/>
    </div>
);

export default connect(mapStateToProps)(MainPage);