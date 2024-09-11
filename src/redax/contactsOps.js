import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e04b982fb67ac16f291bbd.mockapi.io";
export const fetchTasks = createAsyncThunk("items/fetchAll", async () => {
    const response = await axios.get("/items");
    console.dir(response)
    return response.data;
  });