import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

const Home = () => (
  <div className="continent-row grid">
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>
        Total Deaths:
        {' '}
        <span> 50000</span>
      </p>
      <i role="button" aria-label="Mute volume" className="bi bi-arrow-right-circle" />
    </div>
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>Total Deaths: 50000</p>
    </div>
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>Total Deaths: 50000</p>
    </div>
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>Total Deaths: 50000</p>
    </div>
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>Total Deaths: 50000</p>
    </div>
    <div className="row-data shadow p-3 mb-5 rounded">
      <h2>Africa</h2>
      <p>Total Deaths: 50000</p>
    </div>
  </div>
);

export default Home;
