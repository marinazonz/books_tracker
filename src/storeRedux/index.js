import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import optionsSlice from "./options-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        list: optionsSlice.reducer,
    },
});

export default store;
