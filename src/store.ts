import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorege } from './helpers/storage'

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage()
})
store.subscribe(() => saveToLocalStorege(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch