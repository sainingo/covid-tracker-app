import React, { useEffect, useState } from 'react';
import '../Details/Details.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/features/countriesSlice';
import handleCountries from '../../redux/features/countryData';

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const continent = JSON.parse(localStorage.getItem('item'));
  const filteredData = handleCountries(continent);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCountry = filteredData.filter((contry) => contry.countyName === search);

  return (
    <>
      <div className="search-inputs">
        <input value={search} onChange={handleSearch} type="search" placeholder="Search a country" />
        <Link to="/search"><button type="button">Search</button></Link>
      </div>
      <div className="country-row  grid">
        {searchCountry.map((country) => (
          <div
            style={{
              backgroundImage: `url(${country.flag})`, backgroundRepeat: 'no-repeat', backgroundSize: '150px 100px', backgroundPosition: 'left bottom',
            }}
            key={country.id}
            className="country-data shadow p-3 mb-5 rounded"
          >
            <h2>{country.countyName}</h2>
            <p>
              Total Deaths:
              {' '}
              <span>
                {' '}
                {country.deaths}
              </span>
            </p>
            <h5>
              Cases:
              {' '}
              {country.cases}
            </h5>
            <h3>
              Recovered:
              {' '}
              {country.recovered}
            </h3>

          </div>
        ))}

      </div>
    </>
  );
}

export default Search;
