import { createSlice } from '@reduxjs/toolkit'
import type {  PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-items'
import { toast } from 'react-toastify'

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
        const newToDo: ToDo = {
            id: state.todos.length,
            text: action.payload,
            isDone: false
        }
        state.todos = [...state.todos, newToDo]
        toast.success('Новая задача создана', { position: "bottom-right" })
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
      console.log(action.payload);
      
        const newTodos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        state.todos = newTodos
        toast.success('Статус задачи изменен', { position: "bottom-right" })
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
        const newTodos = state.todos.filter((todo) => action.payload.id != todo.id)
        state.todos = newTodos
        toast.success('Задача удалена', { position: "bottom-right" })
    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer