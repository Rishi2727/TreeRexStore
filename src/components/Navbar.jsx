import React from "react";

export default function Navbar() {
    let cartCount = 100

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            TeeRex Store
          </a>
          <button
            className="navbar-toggler position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-shopping-cart fa-2x"></span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cartCount<99 ? cartCount:'99+' } </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-2">
              <li className="nav-item">
                <a className="nav-link  fs-5" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <div className="button position-relative" >
                <a href="" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart fa-2x"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cartCount<99 ? cartCount:'99+' } </span></a>
              </div>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
