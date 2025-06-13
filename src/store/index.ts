import { configureStore } from '@reduxjs/toolkit'
import { carrinhoReducer } from './slices/carrinhoSlice'
import { favoritoReducer } from './slices/favoritoSlice'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
