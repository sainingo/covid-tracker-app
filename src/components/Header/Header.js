import React from 'react';

const Header = () => (
  <div>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a href className="navbar-brand">Covid Tracker</a>
        <form className="d-flex" role="search">
          <input className="form-control me-4" type="search" placeholder="Search your country" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
);

export default Header;
