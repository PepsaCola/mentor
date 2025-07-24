import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getUsers} from "../../user/redusers/getUser";

const URL = process.env.REACT_APP_SERVER_LINK;

export const login = createAsyncThunk('auth/login', async (userData,{dispatch, rejectWithValue}) => {
    try {
        const res = await axios.post(`${URL}/api/auth/login`, userData)
        localStorage.setItem('token', res.data.accessToken);
        console.log(res)
        dispatch(getUsers(res.data.user));
        return res.data.accessToken;
    }
    catch (error) {
        return rejectWithValue(error)
    }
})