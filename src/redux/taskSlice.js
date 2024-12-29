import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, setTasks, updateTask } = taskSlice.actions;

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setTasks(response.data.slice(0, 10))); // Use only the first 10 tasks for simplicity
  } catch (error) {
    console.error('Failed to fetch tasks:', error);
  }
};

export default taskSlice.reducer;
