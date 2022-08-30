import React from 'react'
import Icon from "../assets/img/Icon.svg"

// css
import "../styles/navbarmain.css"

export default function Navbarmain() {
  return (
    <>
     <nav class="navbar py-3">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src={Icon}/>
        </a>
        <div className='btn-auth'>
          <button className="btn-login me-3 fw-semibold">Login</button>
          <button className='btn-register fw-semibold'>Register</button>
        </div>
      </div>
    </nav>
    </>
  )
}
