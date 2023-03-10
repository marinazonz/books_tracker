import { createSlice } from "@reduxjs/toolkit";

const pendingSlice = createSlice({
    name: "pendinglist",
    initialState: JSON.parse(localStorage.getItem("itemsPendingList")) || {
        items: [],
        totalItems: 0,
    },
    reducers: {
        addItemToPendingList(state, action) {
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
                localStorage.setItem("itemsPendingList", JSON.stringify(state));
            } else {
                //if the item does exist in the list:
                alert("The book is already in the list");
            }
        },
        removeItemFromPendingList(state, action) {
            const id = action.payload;

            state.items = state.items.filter((item) => item.id !== id);
            state.totalItems--;
            localStorage.setItem("itemsPendingList", JSON.stringify(state));
        },
    },
});

export const pendingActions = pendingSlice.actions;
export default pendingSlice;
