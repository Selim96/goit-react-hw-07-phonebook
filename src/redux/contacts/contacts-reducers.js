import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    addFilter,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from '../contacts/contacts-actions';

const itemsReducer = createReducer([], {
    [fetchContactsSuccess]: (_, {payload}) => payload.reverse(),
    [addContactsSuccess]: (state, { payload }) => ([payload, ...state]),
    [deleteContactsSuccess]: (state, { payload }) => (state.filter(e => e.id !== payload))
});

const filterReducer = createReducer('', {
    [addFilter]: (_, { payload }) => payload
});

const loader = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactsRequest]: () => true,
    [addContactsSuccess]: () => false,
    [addContactsError]: () => false,
    [deleteContactsRequest]: () => true,
    [deleteContactsSuccess]: () => false,
    [deleteContactsError]: () => false
});

const error = createReducer('', {
    [fetchContactsError]: (_, { payload }) => payload.message,
    [addContactsError]: (_, { payload }) => payload.message,
    [deleteContactsError]: (_, { payload }) => payload.message
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loader,
    error
});