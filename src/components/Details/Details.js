import React, { useEffect } from 'react';
import './Details.css';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/features/countriesSlice';
import handleCountries from '../../redux/features/countryData';

const Details = () => {
  const dispatch = useDispatch();
  // const allCountries = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  const continent = JSON.parse(localStorage.getItem('item'));
  const filteredData = handleCountries(continent);

  return (
    <div className="country-row  grid">
      {filteredData.map((country) => (
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
  );
};

export default Details;
