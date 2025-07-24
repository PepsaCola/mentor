import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_LINK;

export const addContact = createAsyncThunk('user/addContact',async (data,{dispatch, getState,rejectWithValue}) => {
    try {
        const token = getState().auth.token;
        const res = await axios.post(`${URL}/api/contacts`,data,{
            headers: {Authorization: `Bearer ${token}`}
        })
        return res.data;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})

export const notAddContact  = createAsyncThunk('user/notAddContact',async (data,{dispatch, getState,rejectWithValue}) => {
    try {
        const token = getState().auth.token;
        const res = await axios.post(`${URL}/api/contacts/reject`,data,{
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log(res)
        return res.data;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})

export const getContacts = createAsyncThunk('user/getContacts',async (_,{ getState,rejectWithValue}) => {
    try {
        const token = getState().auth.token;
        const id = getState().user.user._id;
        const res = await axios.get(`${URL}/api/contacts/${id}`,{
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log(res)
        return res.data;
    }
    catch (error) {
        return rejectWithValue(error);
    }
})

