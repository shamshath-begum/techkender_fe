import React from "react";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <span>XYZ</span>   INDUSTRIES
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Property
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="button1"><pre>Sign Up</pre></button>
                <button className="button2"><pre>Sign In</pre></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
