import { createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../data";
import { fetchContacts, addContacts, deleteContacts } from "./contactsOps";

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
    .addCase(addContacts.pending, state => {
      state.isLoading = true;
    })
    .addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
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
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
   
  },
 
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

