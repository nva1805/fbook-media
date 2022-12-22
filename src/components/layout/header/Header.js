import React from 'react'
import './header.scss'
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import DefaultAvatar from '../../../asset/image/user-default-avatar.jpg'


const Header = (props) => {
  const {toggleTheme} = props;
  return (
    <div className='header'>
      <div className="header__left">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div className="header__left--logo">FBOOK</div>
        </Link>
        <div className='header__left--search'>
          <input type="text" placeholder='Search on Fbook' />
          <AiOutlineSearch className='search-icon' />
        </div>
      </div>


      <div className="header__middle">
        <NavLink to={'/'} className='header__middle--icon' title='home' ><AiFillHome /></NavLink>
        <NavLink to={'/watch'} className='header__middle--icon' ><BsFillCollectionPlayFill /></NavLink>
        <NavLink to={'/groups'} className='header__middle--icon' ><HiUserGroup /></NavLink>
      </div>


      <div className="header__right">
        <div className="header__right--cover">
          <MdDarkMode 
          className='header__right--cover-icon' 
          onClick={toggleTheme}
          />
        </div>
        <div className="header__right--cover">
          <FaFacebookMessenger className='header__right--cover-icon' />
        </div>
        <div className="header__right--cover">
          <IoNotifications className='header__right--cover-icon' />
        </div>
        <img src={DefaultAvatar} alt="User" disable/>
      </div>
    </div>
  )
}

export default Header