import { createSlice } from "@reduxjs/toolkit";
import { initialValues } from "../data";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: {
      items: initialValues,
      loading: false,
      error: null
    },
  
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      
      state.items.push(action.payload);
    },
  
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    
  }});

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

// функция-селектор
export const getContacts = (state) => {
  console.log(state.contacts.contacts.items)
  return state.contacts.contacts.items};




