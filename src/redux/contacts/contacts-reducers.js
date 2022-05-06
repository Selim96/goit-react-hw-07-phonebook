import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as action from '../contacts/contacts-actions';

const itemsReducer = createReducer([], {
    [action.addContact]: (state, { payload }) => ([...state, payload]),
    [action.deleteItem]: (state, { payload }) => (state.filter(e => e.id !== payload))
});

const filterReducer = createReducer('', {
    [action.addFilter]: (_, { payload }) => payload
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer
});