import * as reducer from './../reducer';
import { CHANGE_FILTER, GET_TWITTS } from '../actions';

describe('reducer', () => {
    it('twitts should handle initial state', () => {
        expect(reducer.twitts( undefined, {} )).toEqual([])
    });

    it('twitts should handle GET_TWITTS action', () => {
        expect(reducer.twitts( [], {
            type: 'GET_TWITTS',
            twitts: [{
                author:  'YANA',
                text: 'My twitt',
                date: '2018-04-02',
                ID: '1234'
            }]
        } )).toEqual([{
            author:  'YANA',
            text: 'My twitt',
            date: '2018-04-02',
            ID: '1234'
        }])
    });

    it('filter should handle handle initial state', () => {
        expect(reducer.filter( undefined , {} )).toEqual('all')
    });

    it('filter should handle CHANGE_FILTER', () => {
        expect(reducer.filter( 'all' , {
            type: 'CHANGE_FILTER',
            query: 'my filter'
        } )).toEqual('my filter')
    });

});