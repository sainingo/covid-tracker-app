import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getContinents = createAsyncThunk('continents/getContinents', async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/continents');
  const continentData = await response.json();
  const fetchContinentData = continentData.map((continent) => ({
    id: Math.floor((Math.random() * 1000) + 1),
    deaths: continent.deaths,
    name: continent.continent,
    countries: continent.countries,
    clicked: false,
  }));
  return fetchContinentData;
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

export const { updateCountries } = continentReducer.actions;
export default continentReducer.reducer;
