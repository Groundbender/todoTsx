import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToDo } from "../models/todo-item";
import { v4 as uuid } from "uuid";
export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: ToDo = {
        id: uuid(),
        text: action.payload,
        isDone: false,
      };
      state.todos = [...state.todos, newToDo];
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      const newToDos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.isDone = !item.isDone;
        }
        return item;
      });

      state.todos = newToDos;
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      const newToDos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );

      state.todos = newToDos;
    },
  },
});

export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;
