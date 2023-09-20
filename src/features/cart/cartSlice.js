import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload === pizzaID
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (!item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state) => {
  state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  state.cart.cart.reduce((sum, cur) => sum + item.totalPrice, 0);
};

// const initialState = {
//   cart: [
//     {
//       pizzaId: 22,
//       name: "damilolo",
//       quantity: 2,
//       unitPrice: 13,
//       total: "26",
//     },
//   ],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       state.cart.push(action.payload);
//     },
//     deleteItem(state, action) {
//       state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
//     },
//     increaseItemQuantity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);
//       item.quantity++;
//       item.total = item.quantity * item.unitPrice;
//     },
//     decreaseItemQauntity(state, action) {
//       const item = state.cart.find((item) => item.pizzaId === action.payload);
//       item.quantity--;
//       item.total = item.quantity * item.unitPrice;
//     },
//     clearItem(state, action) {
//       state.cart = [];
//     },
//   },
// });
