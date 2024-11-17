import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://admin-test-weld.vercel.app/api";
// const url = "https://mg8rp8-8080.csb.app";

const getData = createAsyncThunk(
    "get/data",
    async (type, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${url}/${type}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const addData = createAsyncThunk(
    "add/data",
    async ({ type, data }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${url}/${type}`, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const deleteData = createAsyncThunk(
    "delete/data",
    async ({ type, id }, { rejectWithValue }) => {
        try {
            console.log(`${url}/${type}/${id}`);

            const response = await axios.delete(`${url}/${type}/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const updateData = createAsyncThunk(
    "update/data",
    async ({ type, data }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${url}/${type}/${data.id}`, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export { getData, deleteData, addData, updateData };
