import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

import App from './client/components/app/App';
import MainPage from './client/pages/mainPage';
import AddNewTwittPage from './client/pages/addNewTwittPage';
import FilterPage from './client/pages/filterPage';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component = {MainPage} />
                    <Route path='/create' component = {AddNewTwittPage} />
                    <Route path='/filter/:author' component = {FilterPage} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));