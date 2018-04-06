import React from 'react';
import { shallow } from 'enzyme';
import renderer  from 'react-test-renderer';
import { Header } from './../client/components/header/header';

let props;

describe('Header', () => {

    beforeEach(() => {
        props = {
            filter: 'my filter'
        }
    });

    it('renders correctly', () => {
        const instance = renderer.create(
            <Header {...props} />
        );
        expect(instance.toJSON()).toMatchSnapshot();
    });

});