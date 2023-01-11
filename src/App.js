import React, {  useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/header/Header'
import LeftBar from './components/layout/leftBar/LeftBar'
import RightBar from './components/layout/rightBar/RightBar'
import './App.scss'

const App = () => {
  // const {currentUser} = useContext(AuthContext)

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);



  return (
    <div className={`App ${theme}`}>
      <div className="header">
        <Header
          toggleTheme={toggleTheme}
        />
      </div>
      <div className="App__container">
        <div className={`left-bar ${theme}`}>
          <LeftBar />
        </div>
        <div className={`outlet ${theme}`}>
          <Outlet />
        </div>
        <div className={`right-bar ${theme}`}>
          <RightBar />
        </div>
      </div>
    </div>
  )
}

export default App