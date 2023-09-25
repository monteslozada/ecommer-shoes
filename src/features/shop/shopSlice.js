import { createSlice } from "@reduxjs/toolkit";
import dataCaregories from "../../data/dataCategories"
import dataProducts from '../../data/Products'
import dataCategories from "../../data/dataCategories";



const initialState = {
    categories: dataCategories,
    poducts: dataProducts,
    productsFilteredByCategory: null,
    categorySelected: null,
    productIdSelected: null,

}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setCategorySelected: () => {


        },

        setProductIdSelected: () => {



        },

    },
})
