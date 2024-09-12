import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e04b982fb67ac16f291bbd.mockapi.io";
export const fetchTasks = createAsyncThunk("items/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/items");
    console.log(response)
    return response.data;
  } catch (error) {
   return thunkAPI.rejectWithValue(5)
   
  }
  
  });