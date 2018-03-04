import React from 'react';
import Header from './header/header';
import TwittsList from './twittsList/twittsList';
import AddNewTwittForm from './addNewTwitForm/addNewTwitForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        twitts: state.twitts,
    };
};

const AddNewTwittPage = (props) => (
    <div>
        <Header {...props} />
        <AddNewTwittForm {...props}/>
        <TwittsList {...props}/>
    </div>
);

export default connect(mapStateToProps)(AddNewTwittPage);