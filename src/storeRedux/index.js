import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import optionsSlice from "./options-slice";
import pendingSlice from "./options-slice-pending";
import inProcessSlice from "./options-slice-inprocess";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        list: optionsSlice.reducer,
        pendinglist: pendingSlice.reducer,
        inProcesslist: inProcessSlice.reducer,
    },
});

export default store;
