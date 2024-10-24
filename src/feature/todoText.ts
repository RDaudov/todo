import { createSlice } from '@reduxjs/toolkit'
import type {  PayloadAction } from '@reduxjs/toolkit'

export interface TextState {
  text: string
}

const initialState: TextState = {
  text: ''
}

export const textSlice = createSlice({
  name: 'textReducer',
  initialState,
  reducers: {
    setValueAction: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const { setValueAction } = textSlice.actions

export default textSlice.reducer