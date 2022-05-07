import axios from "axios";
import {
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError
} from './contacts-actions';

axios.defaults.baseURL = "https://6273eb0d345e1821b224332f.mockapi.io/contacts";

export const fetchContact = () => dispatch => {
    dispatch(fetchContactsRequest())

    axios.get("/contacts").then(({ data }) => dispatch(fetchContactsSuccess(data))).catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = formOutput => dispatch => {
    dispatch(addContactsRequest())

    axios.post("/contacts", formOutput).then(({ data }) => dispatch(addContactsSuccess(data))).catch(error => dispatch(addContactsError(error)));
};

export const deleteItem = id => dispatch => {
    dispatch(deleteContactsRequest())

    axios.delete(`/contacts/${id}`).then(() => dispatch(deleteContactsSuccess(id))).catch(error => dispatch(deleteContactsError(error)));
};