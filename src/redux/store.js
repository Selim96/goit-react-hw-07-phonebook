import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
import contactsReducer from './contacts/contacts-reducers';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from "./contacts/pokemon";
import { contactsApi } from "./contacts/contacts-RTK-operations";

// const myMidlware = [...getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//     midlware
// })];

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), pokemonApi.middleware, contactsApi.middleware],
});
setupListeners(store.dispatch)
// export const persistor = persistStore(store);