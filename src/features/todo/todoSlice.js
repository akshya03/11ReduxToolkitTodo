import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text: "Hello World"}]
};

// exported in 2 parts: part 1
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //has properties and functions
    reducers: { 
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=> (todo.id!==action.payload))
        }
    }
})

//export part 2: so they can be directly used in components
export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;

