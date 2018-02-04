import React from 'react';

const REQUEST_PAGE = 'REQUEST_PAGE';

export const appReducer = (state = {
    page: null
}, action) => {
    switch(action.type) {
        case REQUEST_PAGE:
            return Object.assign({}, state, {
                page: action.page,
            });
        default:
            return state;
    }
};