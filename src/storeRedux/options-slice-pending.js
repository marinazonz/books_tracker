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
    },
});

export const pendingActions = pendingSlice.actions;
export default pendingSlice;
