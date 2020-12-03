import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './Common/Header/Header'
import Footer from './Common/Footer/Footer'
import Routes from './Routes'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
