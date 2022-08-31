import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import Navbarmain from './components/Navbarmain';
import NavbarAdmin from './components/navbaradmin';
import Navbaruser from './components/navbaruser';
import Landing from './pages/landing'
import Card from './pages/card'
import Detailproduct from './pages/detailproduct'
import Detailcart from './pages/detailcart'

function App() {
  return(
    <>
      <Detailcart/>
    </>
  )
}

export default App;
