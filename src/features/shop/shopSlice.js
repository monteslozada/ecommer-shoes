import { createSlice } from "@reduxjs/toolkit";

import dataProducts from '../../data/Products'
import dataCategories from "../../data/dataCategories";

const initialState = {
  categories: dataCategories,
  products: dataProducts,
  productsFilteredByCategory: [],
  categorySelected: null,
  productIdSelected: null,
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    },
  },
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer