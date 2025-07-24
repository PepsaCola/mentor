import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('user/get',async (data, { rejectWithValue}) => {
    try {
        return data
    }
    catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error getting user data.");

    }
})