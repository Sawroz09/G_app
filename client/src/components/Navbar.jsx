import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary" >
        <div className="container-fluid">
          <typography className="navbar-brand" variant="h1">G APP</typography>
          <NavLink to='/' className='nav'> home</NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
   
    </header>
  );
}

export default Navbar;
