import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'buy ticket', status: false}
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const payload = action.payload
            //payload => title
            state.push({id: Math.floor(Math.random() * 1000), title: payload, status: false})
        },
        deleteTodo: (state, action) => {
            //payload => id
            const payload = action.payload
            const index = state.findIndex(todo => todo.id === payload)
            state.splice(index, 1)
        },
        updateTodo: (state, action) => {
            //payload => {id:122,title:'asdsad',status:false}
            const payload = action.payload
            const index = state.findIndex(todo => todo.id === payload.id)
            state[index] = payload
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer