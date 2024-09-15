import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e04b982fb67ac16f291bbd.mockapi.io";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/items");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message, "mistake");
    }
  }
);
export const addContacts = createAsyncThunk(
  "contacts/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/items", { Object });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);