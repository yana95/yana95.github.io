import * as actions from './../actions';
import { CHANGE_FILTER, GET_TWITTS } from '../actions';

describe('twitts actions', () => {
    beforeAll(() => {
        jest.mock('axios');
    });

    it('changeFilter should create CHANGE_FILTER action with filter query', () => {
        expect(actions.changeFilter('filter query')).toEqual({
            type: CHANGE_FILTER,
            query: 'filter query'
        })
    })

    it('getTwitts should create GET_TWITTS action with twitts', () => {
        expect(actions.getTwitts({data: ['twit 1', 'twit 2']})).toEqual({
            type: GET_TWITTS,
            twitts: ['twit 1', 'twit 2']
        })
    })
});