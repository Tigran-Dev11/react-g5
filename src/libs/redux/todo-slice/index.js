import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList = [
        ...state.todoList,
        {
          task: payload.task,
          id: payload.id,
          completed: false,
        },
      ];
    },
    deleteTodo: (state, { payload }) => {
      state.todoList =  state.todoList.filter((el) => el.id !== payload);
    },
    checkedTodo: (state, { payload }) => {
      state.todoList = state.todoList.map((el) => {
        if (el.id === payload) el.completed = !el.completed
        return el
      });
    },
  },
});

const todoActions = {
  ...todoSlice.actions,
};

const todoReducer = todoSlice.reducer;

export { todoSlice, todoActions, todoReducer };
