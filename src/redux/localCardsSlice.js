import { createSlice } from '@reduxjs/toolkit'

// const localCards = JSON.parse(window.localStorage.getItem('localCards')) || [];

const localCards = [];
const keys = Object.keys(window.localStorage);
for (const key of keys) {
  if (key.startsWith('card_')) {
    const card = JSON.parse(window.localStorage.getItem(key));
    localCards.push(card);
  }
}

const initialState = localCards || [];

const localCardsSlice = createSlice({
  name: 'localCards',
  initialState: initialState,
  reducers: {
    addNewCard: (state, action) => {
      // window.localStorage.setItem('localCards', JSON.stringify([...state, action.payload]));
      // state.push(action.payload);
      const newCard = action.payload;
      window.localStorage.setItem(`card_${newCard.key}`, JSON.stringify(newCard));
      state.push(newCard);
    },
    deleteCard: (state, action) => {
      window.localStorage.setItem('localCards', JSON.stringify(state.filter(card => card.key !== action.payload)));
      return state.filter(card => card.id !== action.payload);
    }
  }
})

export const { addNewCard, deleteCard } = localCardsSlice.actions

export default localCardsSlice.reducer