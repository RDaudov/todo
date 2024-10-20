import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'

export const store = configureStore({
    reducer: {
        todoList: todoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch