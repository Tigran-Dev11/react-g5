import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counter-slice";
import { todoReducer } from "./todo-slice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    },
})

export default store;