import React from 'react';
import './Details.css';

const Details = () => (
  <div className="container">
    <div className="continent-info">
      <h1>AFRICAN CONTINENT</h1>
      <strong>Total Deaths: 50000</strong>
      <p>Most Affected Country: Nigeria</p>
    </div>

    <div id="countries-row" className="countries-row">
      <ol id="list-group" className="list-group list-group-numbered">
        <li className="list-group-item list-group-item-danger d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Algeria</div>
            Total Deaths: 123451
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Algeria</div>
            Total Deaths: 123451
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Algeria</div>
            Total Deaths: 123451
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>

  </div>
);

export default Details;
