import React from 'react'
import './profile.scss'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsPinterest, BsMessenger } from 'react-icons/bs'
import { CiLocationOn, CiLink, CiCircleMore } from 'react-icons/ci'
import Post from '../home/posts/Posts'


export const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img className='cover' src="https://i.pinimg.com/564x/3e/92/fd/3e92fd5b585f8b1aa0c3e6708f2f1f97.jpg" alt="" />
        <img className='profilePic' src="https://i.pinimg.com/564x/0e/46/0f/0e460fa5d183e4976db951eddeb29c99.jpg" alt="" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com"><BsFacebook /></a>
            <a href="https://facebook.com"><BsInstagram /></a>
            <a href="https://facebook.com"><BsTwitter /></a>
            <a href="https://facebook.com"><BsLinkedin /></a>
            <a href="https://facebook.com"><BsPinterest /></a>
          </div>
          <div className="mid">
            <span>Name</span>
            <button className='btn btn-primary'>Follow</button>
            <div className="info">
              <div className="item">
                <CiLocationOn />
                <p>Viet Nam</p>
              </div>
              <div className="item">
                <CiLink />
                <p>github.com/anhnv</p>
              </div>
            </div>
          </div>
          <div className="right">
            <BsMessenger fontSize={'1.12rem'} />
            <CiCircleMore fontSize={'1.3rem'} />
          </div>
        </div>
      </div>
      <Post />
    </div>
  )
}
