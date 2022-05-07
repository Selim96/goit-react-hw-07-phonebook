import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction('fetchContactsRequest');
export const fetchContactsSuccess = createAction('fetchContactsSuccess');
export const fetchContactsError = createAction('fetchContactsError');

// export const addContact = createAction("add");

export const addContactsRequest = createAction('addContactsRequest');
export const addContactsSuccess = createAction('addContactsSuccess');
export const addContactsError = createAction('addContactsError');

export const deleteContactsRequest = createAction('deleteContactsRequest');
export const deleteContactsSuccess = createAction('deleteContactsSuccess');
export const deleteContactsError = createAction('deleteContactsError');

export const addFilter = createAction("filter");

// export const deleteItem = createAction("deleteItem");

