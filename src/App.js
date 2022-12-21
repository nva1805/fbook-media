import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/header/Header'
import LeftBar from './components/layout/leftBar/LeftBar'
import RightBar from './components/layout/rightBar/RightBar'
import './App.css'

const App = () => {
  
  return (
    <div className='App'>
      <div className="header">
        <Header />
      </div>
      <div className="App__container">
        <div className="left-bar">
          <LeftBar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
        <div className="right-bar">
          <RightBar />
        </div>
      </div>
    </div>
  )
}

export default App