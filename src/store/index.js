import { configureStore } from '@reduxjs/toolkit'
import shopSlice from '../features/shop/shopSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopApi'
import CounterSlice from '../features/counter/CounterSlice'


 const store = configureStore({

  reducer: {    
     counter: CounterSlice,
    shop: shopSlice,
    [shopApi.reducerPath] : shopApi.reducer,
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware (). concat(shopApi.middleware),
})
setupListeners(store.dispatch)
export default store

