import React from 'react';
import renderer  from 'react-test-renderer';
import { TwittsList } from './../client/components/twittsList/twittsList';

let props;

describe('TwittsList', () => {

    beforeEach(() => {
        props = {
            twitts: [
                {
                    text: 'My twitt',
                    date: '2018-04-01',
                    author: 'Yana Zaitsava',
                    ID: 'unik1'
                },
                {
                    text: 'My twitt2',
                    date: '2018-04-02',
                    author: 'Yana Zaitsava',
                    ID: 'unik2'
                }
            ],
            fetchDeleteTwitt: jest.fn(),
            fetchGetTwitts: jest.fn()
        }
    });

    it('renders correctly', () => {
        const instance = renderer.create(
            <TwittsList {...props} />
        );
        expect(instance.toJSON()).toMatchSnapshot();
    });


});