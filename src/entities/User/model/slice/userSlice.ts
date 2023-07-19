import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/User';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const {
    actions: userActions,
    reducer: userReducer,
} = userSlice;