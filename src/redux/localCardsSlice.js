import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const localCardsSlice = createSlice({
  name: 'localCards',
  initialState: initialState,
  reducers: {
    addNewCard: (state, action) => {
      window.localStorage.setItem('localCards', JSON.stringify([...state, action.payload]));
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      window.localStorage.setItem('localCards', JSON.stringify(state.filter(card => card.key !== action.payload)));
      return state.filter(card => card.id !== action.payload);
    }
  }
})

export const { addNewCard, deleteCard } = localCardsSlice.actions
export default localCardsSlice.reducer