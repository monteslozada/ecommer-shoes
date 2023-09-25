import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../features/counter/CounterSlice'
import shopSlice from '../features/shop/shopSlice'
 

export const store = configureStore({

  reducer: {
    counter : CounterSlice,
    shop: shopSlice,
  },

})