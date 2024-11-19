import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://mg8rp8-8080.csb.app";

const apiRequest = async (method, endpoint, data = null) => {
    const response = await axios({
        method,
        url: `${BASE_URL}/${endpoint}`,
        data,
    });
    return response.data;
};

export const getData = createAsyncThunk("data/get", async (type, thunkAPI) => {
    try {
        return await apiRequest("get", type);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const addData = createAsyncThunk(
    "data/add",
    async ({ type, data }, thunkAPI) => {
        try {
            return await apiRequest("post", type, data);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);

export const deleteData = createAsyncThunk(
    "data/delete",
    async ({ type, id }, thunkAPI) => {
        try {
            await apiRequest("delete", `${type}/${id}`);
            return { id };
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);
export const updateData = createAsyncThunk(
    "data/update",
    async ({ type, data }, thunkAPI) => {
        try {
            return await apiRequest("put", `${type}/${data.id}`, data);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data || error.message
            );
        }
    }
);
