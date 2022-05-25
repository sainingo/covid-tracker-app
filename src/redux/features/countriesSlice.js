import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  const countryData = await response.json();
  const fetchCountriesData = countryData.map((country) => ({
    id: Math.floor((Math.random() * 10000000) + 1),
    deaths: country.deaths,
    name: country.continent,
    countyName: country.country,
    flag: country.countryInfo.flag,
    recovered: country.recovered,
    cases: country.cases,
    continent: country.continent,
    clicked: false,
  }));
  return fetchCountriesData;
});

const countriesReducer = createSlice({
  name: 'continents',
  initialState: [],
  reducers: {
  },

  extraReducers: {
    [getCountries.fulfilled]: (state, action) => action.payload,

  },
});

export default countriesReducer.reducer;
