import React from 'react';
import { shallow } from 'enzyme';
import renderer  from 'react-test-renderer';
import Twitt from './../client/components/twitt/twitt';

let props;

describe('Twitt', () => {

    beforeEach(() => {
        props = {
            deleteTwitt: () => {},
            item: {
                text: 'My twitt',
                date: '2018-04-01',
                author: 'Yana Zaitsava'
            }
        }
    });

    it('renders correctly', () => {
        const instance = renderer.create(
            <Twitt {...props} />
        );
        expect(instance.toJSON()).toMatchSnapshot();
    });

    it('should activate click handler', () => {
        const mockCallBack = jest.fn();
        props.deleteTwitt = mockCallBack
        const twitt = shallow((<Twitt {...props} />));
        twitt.find('.delete').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});