import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch data from the api
export const getContinents = createAsyncThunk('continents/getContinents', async () => {
  const baseUrl = 'https://disease.sh/v3/covid-19/continents';
  return axios.get(baseUrl).then((res) => res.data);
});

const continentReducer = createSlice({
  name: 'continents',
  initialState: [],
  reducers: {

  },
  extraReducers: {
    [getContinents.fulfilled]: (state, action) => action.payload,
  },
});

export default continentReducer.reducer;
