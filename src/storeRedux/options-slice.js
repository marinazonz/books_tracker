import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: "list",
    initialState: JSON.parse(localStorage.getItem("itemsList")) || {
        items: [],
        totalItems: 0,
    },
    reducers: {
        addItemToList(state, action) {
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
                localStorage.setItem("itemsList", JSON.stringify(state));
            } else {
                //if the item does exist in the list:
                alert("The book is already in the list");
            }
        },
    },
});

export const optionsActions = optionsSlice.actions;
export default optionsSlice;
