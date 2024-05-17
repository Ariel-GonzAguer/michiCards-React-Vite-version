// crear store con configureStore
import { configureStore } from '@reduxjs/toolkit'
import localCardsSlice from './localCardsSlice'

const store = configureStore({
  reducer: {
    localCards: localCardsSlice
  }
})

export default store