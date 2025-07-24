import {createAsyncThunk} from "@reduxjs/toolkit";
import uniqid from "uniqid";
import axios from "axios";
import {login} from "./login";

const URL = process.env.REACT_APP_SERVER_LINK;


export const registerUser = createAsyncThunk('auth/register', async (userData, { dispatch, rejectWithValue }) => {
    try {
        await axios.post(`${URL}/api/auth/register`, {...userData, avatar: '', userId: uniqid()});
        const res = dispatch(login(userData));
        return await res.payload
    }
    catch (error) {
        return rejectWithValue(error.response?.data?.message || "Error creating user data.");
    }
})