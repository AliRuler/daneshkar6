import {configureStore} from "@reduxjs/toolkit";
import soheil from "./slice/todo.slice";

export const store = configureStore({
    reducer: {
        todo: soheil,
    }
})