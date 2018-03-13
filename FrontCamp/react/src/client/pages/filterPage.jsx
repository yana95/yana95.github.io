import React from 'react';
import Header from '../components/header/header';
import TwittList from '../components/twittsList/twittsList';

const FilterPage = (props) => (
    <div>
        <Header history={props.history} />
        <TwittList {...props}/>
    </div>
);

export default FilterPage;