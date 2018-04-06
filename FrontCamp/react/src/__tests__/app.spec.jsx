import React from 'react';
import renderer  from 'react-test-renderer';
import App from './../client/components/app/App';

describe('App', () => {

    it('renders correctly', () => {
        const instance = renderer.create(
            <App>
                <div>Hi</div>
            </App>
        );
        expect(instance.toJSON()).toMatchSnapshot();
    });


});