import React from 'react'
import logo from "../assets/cowin-logo.svg"

function Secondarynav() {
    return (
      <nav class="navbar secondary navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logo}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Vaccination Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Register Members</a></li>
                <li><a class="dropdown-item" href="#">Search Vaccination Centers</a></li>
                {/* <li><hr class="dropdown-divider"/></li> */}
                <li><a class="dropdown-item" href="#">Book Appointment Slot</a></li>
                <li><a class="dropdown-item" href="#">manage Appointment</a></li>
                <li><a class="dropdown-item" href="#">Download certificates</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Platforms
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Register Members</a></li>
                <li><a class="dropdown-item" href="#">Search Vaccination Centers</a></li>
                {/* <li><hr class="dropdown-divider"/></li> */}
                <li><a class="dropdown-item" href="#">Book Appointment Slot</a></li>
                <li><a class="dropdown-item" href="#">manage Appointment</a></li>
                <li><a class="dropdown-item" href="#">Download certificates</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Resources
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Register Members</a></li>
                <li><a class="dropdown-item" href="#">Search Vaccination Centers</a></li>
                {/* <li><hr class="dropdown-divider"/></li> */}
                <li><a class="dropdown-item" href="#">Book Appointment Slot</a></li>
                <li><a class="dropdown-item" href="#">manage Appointment</a></li>
                <li><a class="dropdown-item" href="#">Download certificates</a></li>
              </ul>
            </li>
           

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Support
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Register Members</a></li>
                <li><a class="dropdown-item" href="#">Search Vaccination Centers</a></li>
                {/* <li><hr class="dropdown-divider"/></li> */}
                <li><a class="dropdown-item" href="#">Book Appointment Slot</a></li>
                <li><a class="dropdown-item" href="#">manage Appointment</a></li>
                <li><a class="dropdown-item" href="#">Download certificates</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link button">Register/Sign In</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    )
}

export default Secondarynav
