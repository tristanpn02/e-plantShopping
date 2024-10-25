import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // extract item's info from action.payload
      // look for item in state.items to match extracted name
      // if item exists then add 1 to quantity, otherwise add item to cart with 1 quantity
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      // filter out items that match the name from action.payload
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // extract item's name and amount from action.payload
      // look for item in state.items to match extracted name
      // update item's quantity to new amount provided in payload
      console.log(action.payload);
      const {name, quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
