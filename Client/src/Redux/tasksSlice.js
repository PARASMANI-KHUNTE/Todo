import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: [
    { id: 1, text: 'Buy groceries', isImportant: false },
    { id: 2, text: 'Finish project report', isImportant: true },
    { id: 3, text: 'Call the bank', isImportant: false },
    { id: 4, text: 'Schedule dentist appointment', isImportant: false },
    { id: 5, text: 'Plan weekend trip', isImportant: false },
  ],
  completed: [
    { id: 6, text: 'Read a book', isImportant: false },
    { id: 7, text: 'Clean the house', isImportant: false },
    { id: 8, text: 'Prepare presentation', isImportant: false },
    { id: 9, text: 'Update blog', isImportant: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.pending.push(action.payload);
    },
    toggleComplete(state, action) {
      const taskIndex = state.pending.findIndex((task) => task.id === action.payload);
      if (taskIndex !== -1) {
        const [task] = state.pending.splice(taskIndex, 1);
        state.completed.push(task);
      } else {
        const completedIndex = state.completed.findIndex((task) => task.id === action.payload);
        const [task] = state.completed.splice(completedIndex, 1);
        state.pending.push(task);
      }
    },
    toggleImportant(state, action) {
      const toggleTask = (task) => {
        if (task.id === action.payload) task.isImportant = !task.isImportant;
      };

      state.pending.forEach(toggleTask);
      state.completed.forEach(toggleTask);
    },
  },
});

export const { addTask, toggleComplete, toggleImportant } = tasksSlice.actions;
export default tasksSlice.reducer;
