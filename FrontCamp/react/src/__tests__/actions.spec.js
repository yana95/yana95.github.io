import * as actions from './../actions';
import { CHANGE_FILTER } from '../actions';

describe('twitts actions', () => {
    it('changeFilter should create CHANGE_FILTER action with filter query', () => {
        expect(actions.changeFilter('filter query')).toEqual({
            type: CHANGE_FILTER,
            query: 'filter query'
        })
    })
});