import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import themeReducer from './feature/themeList'
import { loadFromLocalStorage, saveToLocalStorege } from './helpers/storage'

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    themeList: themeReducer
  },
  preloadedState: loadFromLocalStorage()
})
store.subscribe(() => saveToLocalStorege(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch