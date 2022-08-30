import React from 'react'
import Icon from "../assets/img/Icon.svg"
import Profilephoto from "../assets/img/profilephoto.png"
import Shpbasket from "../assets/img/shoppingBasket.svg"
import User from "../assets/img/user.svg"
import Logout from "../assets/img/logout.svg"

// css
import "../styles/navbarmain.css"

export default function NavbarAdmin() {
  return (
    <>
     <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src={Icon}/>
        </a>
        <div className='btn-auth d-flex'>
            <img className='me-3' src={Shpbasket}/>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='img-profile rounded-circle' src={Profilephoto}/>
                </a>
                <ul class="dropdown-menu dropdown-menu-light me-5">
                    <div className='d-flex py-3 px-3'>
                        <img src={User}/>
                        <li><a style={{fontSize:"15px"}} class="dropdown-item fw-semibold" href="#">Profile</a></li>
                    </div>
                    <li><hr class="dropdown-divider"/></li>
                    <div className='d-flex py-3 px-3'>
                        <img src={Logout}/>
                        <li><a style={{fontSize:"15px"}} class="dropdown-item fw-semibold" href="#">add product</a></li>
                    </div>
                </ul>
                </li>
            </ul>
            </div>
        </div>
      </div>
    </nav>
    </>
  )
}
