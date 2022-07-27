import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodosState {
    list: Todo[];
    id: number;
}

const initialState: TodosState = {
    list: [],
    id: 0,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: state.id++,
        title: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompite(state, action: PayloadAction<number>) {
      const todo = state.list.find(item => item.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompite } = todoSlice.actions;

export default todoSlice.reducer;
