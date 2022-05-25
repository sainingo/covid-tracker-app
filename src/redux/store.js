import { configureStore } from '@reduxjs/toolkit';

import continentReducer from './features/continentSlice';
import countriesReducer from './features/countriesSlice';

const store = configureStore({
  reducer: {
    continent: continentReducer,
    country: countriesReducer,
  },
});

export default store;
