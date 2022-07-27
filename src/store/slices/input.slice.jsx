import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const inputSlice = createSlice({
	name: 'username',
    initialState: "",
    reducers: {
        changueName: (state, action) => {
            return action.payload
        }
    }
})

export const { changueName } = inputSlice.actions;

export default inputSlice.reducer;