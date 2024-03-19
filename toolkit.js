import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

console.log("initial store", store.getState());
store.subscribe(() => {
  console.log("store change", store.getState());
});

const action1 = addToCart({ id: 11, qty: 12 });
store.dispatch(action1);

store.dispatch(login());
