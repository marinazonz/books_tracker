import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import optionsSlice from "./options-slice";
import pendingSlice from "./options-slice-pending";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        list: optionsSlice.reducer,
        pendinglist: pendingSlice.reducer,
    },
});

export default store;
