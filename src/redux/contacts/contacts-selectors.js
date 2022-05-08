export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getLoader = state => state.contacts.loader;

// export const getFilteredItems = (state) => {
//         if (getFilterValue(state).trim() !== '') {
//             return getContacts(state).filter(contact => contact.name.toLowerCase().includes(getFilterValue(state).toLowerCase()));
//         }
//         return getContacts(state);
// };
    
