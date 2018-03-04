import React from 'react';
import Header from './header/header';
import Filter from './filter/filter';

const FilterPage = (props) => (
    <div>
        <Header {...props} />
        <Filter {...props}/>
    </div>
);

export default FilterPage;