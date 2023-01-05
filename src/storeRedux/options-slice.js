import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
    name: "list",
    initialState: {
        items: [],
        totalItems: 0,
        isInLocalstorage: false,
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
                    name: newItem.name,
                    author: newItem.author,
                    description: newItem.description,
                });
                state.totalItems++;
                localStorage.setItem("itemsList", JSON.stringify(state));
                state.isInLocalstorage = true;
            } else {
                //if the item does exist in the list:
                alert("The book is already in the list");
            }
        },
    },
});

export const optionsActions = optionsSlice.actions;
export default optionsSlice;
