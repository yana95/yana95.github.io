import React from 'react';
import Header from '../components/header/header';
import TwittsList from '../components/twittsList/twittsList';
import AddNewTwittForm from '../components/addNewTwitForm/addNewTwitForm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        twitts: state.twitts,
    };
};

const AddNewTwittPage = (props) => (
    <div>
        <Header history={props.history} />
        <AddNewTwittForm {...props}/>
        <TwittsList {...props}/>
    </div>
);

export default connect(mapStateToProps)(AddNewTwittPage);