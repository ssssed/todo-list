import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  list: Todo[];
  id: number;
  isVisible: boolean;
}

const initialState: TodosState = {
  list: [
    { id: 1, title: 'Текстовое задание', completed: false },
    { id: 2, title: 'Прекрасный код', completed: true },
    { id: 3, title: 'Покрытие тестами', completed: false },
  ],
  id: 4,
  isVisible: true,
};

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
      const todo = state.list.find((item) => item.id === action.payload);
      todo.completed = !todo.completed;
    },
    toggleOpenTodoList(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompite, toggleOpenTodoList } =
  todoSlice.actions;

export default todoSlice.reducer;
