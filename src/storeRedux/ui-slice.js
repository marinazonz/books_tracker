import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { pageIsVisible: false },
    reducers: {
        toggle(state) {
            state.pageIsVisible = !state.pageIsVisible;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
