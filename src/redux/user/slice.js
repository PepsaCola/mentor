import {createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./redusers/getUser";
import {getInvitations} from "./redusers/getInvitations";
import {addContact, getContacts, notAddContact} from "./redusers/contact";
import {addMessage} from "./redusers/chat";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    },
    reducers:{
        addMessageToChat: (state, action)=>{
            addMessage(state, action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getInvitations.fulfilled, (state, action) => {
                state.user.invitations = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getInvitations.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getInvitations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(addContact.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(notAddContact.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
            })
            .addCase(notAddContact.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(notAddContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getContacts.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.user.contacts = action.payload;
            })

    }
})

export const userReducer = userSlice.reducer;
export const { addMessageToChat } = userSlice.actions;