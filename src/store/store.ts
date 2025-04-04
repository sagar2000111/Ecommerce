// app/store.js
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import favoritesReducer from './favouriteSlice';
import cartSliceReducer from './cartSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
};

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer,
);
const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSliceReducer,
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    cart: persistedCartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
