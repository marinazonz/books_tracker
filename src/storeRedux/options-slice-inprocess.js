import { createSlice } from "@reduxjs/toolkit";

const inProcessSlice = createSlice({
    name: "inProcesslist",
    initialState: JSON.parse(localStorage.getItem("itemsInProcessList")) || {
        items: [],
        totalItems: 0,
    },
    reducers: {
        addItemToInProcessList(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            //if the item doesn't exist in the list:
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    author: newItem.author,
                    description: newItem.description,
                });
                state.totalItems++;
                localStorage.setItem(
                    "itemsInProcessList",
                    JSON.stringify(state)
                );
            } else {
                //if the item does exist in the list:
                alert("The book is already in the list");
            }
        },
        removeItemFromInProcessList(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            state.totalItems--;
            localStorage.setItem("itemsInProcessList", JSON.stringify(state));
        },
    },
});

export const inProcessActions = inProcessSlice.actions;
export default inProcessSlice;
