import * as types from './domain.actionsTypes';

export const actionName = (text) => {
    return {
        type: types.ACTION_TYPE,
        payload: text
    }
};

