import { createSlice } from '@reduxjs/toolkit';

const initialState = 0

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state, action) {
            return state + action.payload
        },
        decremented(state, action) {
            return state - 1
        }
    }
})

export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer;