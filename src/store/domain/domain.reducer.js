// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views
import * as types from './domain.actionsTypes'
import _ from 'lodash';

const INITIAL_STATE = {
    text: "Press me to change the store state",
    number: 8
};

export default function reduce(state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case types.ACTION_TYPE:
            return {...state,text: action.payload};
        default:
            return state;
    }
};

//selectors
export function getText(state) {
    return state.domain.text;
}

export function getNumber(state) {
    return state.domain.number;
}