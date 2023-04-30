import { createSlice } from '@reduxjs/toolkit';

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products : [],
    filteredProducts: [],
  },
  reducers: {

    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.filteredProducts = state.products;
    },

    editProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
      state.filteredProducts = state.products;
    },

    filterByName: (state, action) => {
      const filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.filteredProducts = filteredProducts;
      },

      filterByPrice: (state, action) => {
        const filteredProducts = state.products.filter(
          (product) => product.price <= action.payload
        );
        state.filteredProducts = filteredProducts;
      },
      filterByQuantity: (state, action) => {
        const filteredProducts = state.products.filter(
          (product) => product.quantity <= action.payload
        );
        state.filteredProducts = filteredProducts;
      },
      
      filterByPrice: (state, action) => {
        const filteredProducts = state.products.filter(
         (product) => product.price <= action.payload
        );
        state.filteredProducts = filteredProducts;
      },

      filterByQuantity: (state, action) => {
      const filteredProducts = state.products.filter(
      (product) => product.quantity <= action.payload
       );
      state.filteredProducts = filteredProducts;
      },

  },
});

export const { addProduct,
  editProduct,
  filterByName,
  filterByPrice,
  filterByQuantity } = ProductsSlice.actions;

export {ProductsSlice};