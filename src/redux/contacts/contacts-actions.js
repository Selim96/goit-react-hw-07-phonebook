import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("add");

export const addFilter = createAction("filter");

export const deleteItem = createAction("deleteItem");