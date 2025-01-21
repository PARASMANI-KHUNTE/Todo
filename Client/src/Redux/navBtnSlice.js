import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenu: false,
    theme: false,
    search: "",
    grid: false,
};

const navBtnSlice = createSlice({
    name: "btnSlice",
    initialState,
    reducers: {
        toggleIsMenu(state) {
            state.isMenu = !state.isMenu;
        },
        toggleIsTheme(state) {
            state.theme = !state.theme;
        },
        setSearch(state, action) {
            state.search = action.payload; // Dynamically set the search value
        },
        toggleIsGrid(state) {
            state.grid = !state.grid;
        },
    },
});

export const { toggleIsMenu, toggleIsTheme, setSearch, toggleIsGrid } = navBtnSlice.actions;
export default navBtnSlice.reducer;
