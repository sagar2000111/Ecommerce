import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number | string;
  description: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{id: string; amount: number}>,
    ) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.amount;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{id: string}>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        }
      }
    },
    removeItem: (state, action: PayloadAction<{id: string}>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
