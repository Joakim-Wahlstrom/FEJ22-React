import React from 'react'

const Navbar = () => {
  return (
    // <!--Navbar-->
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        {/* <!-- Navbar brand --> */}
        <a className="navbar-brand" href="!#">Navbar</a>

        {/* <!-- Collapse button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapsible content --> */}
        <div className="collapse navbar-collapse" id="basicExampleNav">

          {/* <!-- Links --> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="!#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Pricing</a>
            </li>

            {/* <!-- Dropdown --> */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</span>
              <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/#">Action</a>
                <a className="dropdown-item" href="/#">Another action</a>
                <a className="dropdown-item" href="/#">Something else here</a>
              </div>
            </li>

          </ul>
          {/* <!-- Links --> */}

          <form className="form-inline">
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
        {/* <!-- Collapsible content --> */}

      </nav>
      // {/* <!--/.Navbar--> */}
  )
}

export default Navbar