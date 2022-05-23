import React, { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContinents } from '../../redux/features/continentSlice';

const Home = () => {
  const allContinents = useSelector((state) => state.continent);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, []);

  return (
    <div className="continent-row grid">
      {allContinents.map((continent) => (
        <div key={continent.continent} className="row-data shadow p-3 mb-5 rounded">
          <h2>{continent.continent}</h2>
          <p>
            Total Deaths:
            {' '}
            <span>
              {' '}
              {continent.deaths}
            </span>
          </p>
          <i role="button" aria-label="Mute volume" className="bi bi-arrow-right-circle" />
        </div>
      ))}

    </div>
  );
};

export default Home;
