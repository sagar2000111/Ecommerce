import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;
