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

// const myMidlware = [...getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//     midlware
// })];

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        },
});

// export const persistor = persistStore(store);