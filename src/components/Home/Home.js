import React, { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContinents } from '../../redux/features/continentSlice';

const Home = () => {
  const allContinents = useSelector((state) => state.continent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  const hancleClick = (name) => {
    localStorage.setItem('item', JSON.stringify(name));
  };
  return (
    <>
      <h4>Worlds Live Stats:</h4>
      <div className="continent-row grid">
        {allContinents.map((continent) => (
          <div key={continent.id} className="row-data shadow p-3 mb-5 rounded">
            <h2>{continent.name}</h2>
            <p>
              Total Deaths:
              {' '}
              <span>
                {' '}
                {continent.deaths}
              </span>
            </p>
            <Link to="/details"><button id={continent.id} onClick={() => hancleClick(continent.name)} className="btn-continents" type="button"><i aria-label="Mute volume" className="bi bi-arrow-right-circle" /></button></Link>
          </div>
        ))}

      </div>
    </>
  );
};

export default Home;
