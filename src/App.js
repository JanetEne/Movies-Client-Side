import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './jumbotronComponent/jumbotron';
import HeaderComponent from './Header/Header'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <h2>hello React!!!!!!!!!</h2>
      <Jumbotron/>
    </div>
  )
}

export default App
