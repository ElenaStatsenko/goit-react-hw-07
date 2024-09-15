import { createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../data";
import { fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: initialValues,
    loading: false,
    error: null,
  },
  // Об'єкт редюсерів
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  // reducers: {
  //   addContact(state, action) {
  //     console.log(action);
  //     state.items.push(action.payload);
  //   },

  //   deleteContact(state, action) {
  //     state.items = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  // },
});

// Генераторы экшенов


// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

// функция-селектор
export const getContacts = (state) => {
  return state.contacts.items;
};
export const getIsLoading = state => state.contacts.isLoading;


export const getError = state => state.contacts.error;

