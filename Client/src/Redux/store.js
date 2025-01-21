import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import sidebarReducer from './sidebarSlice';
import navBtnReducer from './navBtnSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    sidebar: sidebarReducer,
    navBtn: navBtnReducer,
  },
});
