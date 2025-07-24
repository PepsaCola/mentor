import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfile = createAsyncThunk('auth/fetchProfile', async (_,{getState,rejectWithValue}) => {
    try {
        const token = await getState().auth.token;
        const res = await axios.get('/api/profile/',{
            headers: {Authorization: `Bearer ${token}`}
        });
        return res.data;
    }
    catch (error) {
        return  rejectWithValue(error);
    }
});