import { configureStore } from '@reduxjs/toolkit';

import continentReducer from './features/continentSlice';

const store = configureStore({
  reducer: {
    continent: continentReducer,
  },
});

export default store;
