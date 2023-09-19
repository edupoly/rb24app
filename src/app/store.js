import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
import { countriesApi } from '../services/countriesApi'
import { booksApi } from '../services/booksApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    c:counterReducer,
    t:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,booksApi.middleware),
})

setupListeners(store.dispatch)