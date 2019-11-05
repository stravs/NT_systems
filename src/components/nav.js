import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)


export default Nav
