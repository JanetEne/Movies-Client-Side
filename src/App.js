import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HeaderComponent from './Common/Header/Header'
import Routes from './Routes'

const App = () => {
  return (
    <div className='app'>
      <HeaderComponent />
      <Routes />
    </div>
  )
}

export default App
