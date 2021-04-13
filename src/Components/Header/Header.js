import React from "react";
import { Link } from 'react-router-dom'
import'bootstrap/dist/js/bootstrap.bundle.min';
import'bootstrap/dist/css/bootstrap.min.css';
// You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*> always matches

export default function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand" href="#"><Link to='/'> Virtuall Mall </Link> </p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="#">Virtuall Mall <span className="sr-only">(current)</span></a> */}
        <p class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal" mr-sm-0><Link to='/register'> Register </Link> <span className="sr-only"></span></p>
      </li>
      <li className="nav-item">
        <p className="nav-link" href="#">Link</p>
      </li>
      <li className="nav-item dropdown">
        <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </p>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <p className="dropdown-item" href="#">Action</p>
          <p className="dropdown-item" href="#">Another action</p>
          <div className="dropdown-divider"></div>
          <p className="dropdown-item" href="#">Something else here</p>
        </div>
      </li>
      <li className="nav-item">
        <p className="nav-link disabled" href="#">Disabled</p>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


   </>
  );
}

