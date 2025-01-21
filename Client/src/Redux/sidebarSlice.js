import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: true, // Set default authentication state
  tasks: {
    todayTasks: 11, // Number of tasks
    completed: 5,   // Number of completed tasks
  },
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleAuthentication(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    updateTasks(state, action) {
      state.tasks = { ...state.tasks, ...action.payload };
    },
  },
});

export const { toggleAuthentication, updateTasks } = sidebarSlice.actions;
export default sidebarSlice.reducer;
