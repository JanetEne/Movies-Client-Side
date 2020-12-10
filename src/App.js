import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './Common/Header/Header'
import Footer from './Common/Footer/Footer'
import Routes from './Routes'
import Store from './Store'

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <HeaderComponent />
        <Routes />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
