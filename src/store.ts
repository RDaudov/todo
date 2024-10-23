import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'

const saveToLocalStorage = (state: RootState) => {
    try {
        const appState = JSON.stringify(state)
        localStorage.setItem('appState', appState)
    } catch (error) {
        console.warn(error);
    }


}

const loadFromLocalStorage = () => {
    try {
        const appState = localStorage.getItem('appState')
        if (!appState) return undefined
        return JSON.parse(appState)

    } catch (error) {
        console.warn(error);
        return undefined
    }
}

export const store = configureStore({
    reducer: {
        todoList: todoReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() =>
    saveToLocalStorage(store.getState())

)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch