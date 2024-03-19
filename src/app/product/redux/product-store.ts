import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log(action)
      // state.push(action.payload);
    },
  },
});

const ProductStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("initial store", ProductStore.getState());
// store.subscribe(() => {
//   console.log("store change", store.getState());
// });

class ProductState {
  constructor() {}

  addToCart() {
    
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { ProductStore, cartSlice };
