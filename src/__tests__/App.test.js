import continentReducer, { getContinents } from '../redux/features/continentSlice';
import { getCountries } from '../redux/features/countriesSlice';

it('getContinents should return a promise', () => {
  expect(getContinents()).toEqual(expect.any(Function));
});

it('getCountries should return a promise', () => {
  expect(getCountries()).toEqual(expect.any(Function));
});

it('Expect continent reducer to handle getContinents', () => {
  expect(continentReducer({}, [getContinents.fulfilled])).not.toBeNull();
});
