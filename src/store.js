import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counters/counterSlice'
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: true
})
export default store;