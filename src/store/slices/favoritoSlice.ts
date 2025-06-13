import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface favoritoState {
  favoriteArray: Produto[]
  value: number
}

const initialState: favoritoState = {
  favoriteArray: [],
  value: 0
}

export const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.favoriteArray.findIndex(
        (item) => item.id === produto.id
      )

      if (index !== -1) {
        state.favoriteArray.splice(index, 1)
        state.value -= 1
      } else {
        state.favoriteArray.push(produto)
        state.value += 1
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions

export const favoritoReducer = favoritoSlice.reducer
