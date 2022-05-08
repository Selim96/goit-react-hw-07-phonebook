import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6273eb0d345e1821b224332f.mockapi.io/contacts' }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContacts: builder.query({
        query: () => "/contacts",
        providesTags: ['contact'],
    }),
    deleteContacts: builder.mutation({
        query: contactId => ({
            url: `/contacts/${contactId}`,
            method: 'DELETE',
        }),
    invalidatesTags: ['contact'],
    }),
    createContacts: builder.mutation({
        query: newContact => ({
            url: '/contacts',
            method: 'POST',
            body: newContact,
        }),
    invalidatesTags: ['contact'],
    }),
  }),
})

export const { useGetContactsQuery, useDeleteContactsMutation, useCreateContactsMutation } = contactsApi