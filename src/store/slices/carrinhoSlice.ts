import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoState {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.produtos.find((itemState) => itemState.id === produto.id)) {
        alert('Produto já adicionado ao carrinho')
      } else {
        state.produtos.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export const carrinhoReducer = carrinhoSlice.reducer
