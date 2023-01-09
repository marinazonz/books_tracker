import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { pageIsVisible: false, pagePendingIsVisible: false },
    reducers: {
        toggle(state) {
            state.pageIsVisible = !state.pageIsVisible;
        },
        toggleForPendingList(state) {
            state.pagePendingIsVisible = !state.pagePendingIsVisible;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
