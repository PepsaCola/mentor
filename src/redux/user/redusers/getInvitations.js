import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_LINK;

export const getInvitations = createAsyncThunk('user/getInvitations',async (data,{getState,rejectWithValue})=>{
    try {
        const token = getState().auth.token;
        const res = await axios.get(`${URL}/api/contacts/invitations/${data}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return res.data;
    }
    catch(err){
        return  rejectWithValue(err);
    }
})