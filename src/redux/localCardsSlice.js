import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(window.localStorage.getItem('localCards')) || [];

const localCardsSlice = createSlice({
  name: 'localCards',
  initialState: initialState,
  reducers: {
    addNewCard: (state, action) => {
      window.localStorage.setItem('localCards', JSON.stringify([...state, action.payload]));
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      const updatedState = state.filter(card => card.key !== action.payload);
      window.localStorage.setItem('localCards', JSON.stringify(updatedState));
      return updatedState;
    }
  }
})

export const { addNewCard, deleteCard } = localCardsSlice.actions
export default localCardsSlice.reducer