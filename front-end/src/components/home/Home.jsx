import React from 'react'
import './home.scss'
import Post from './posts/Posts'
import Stories from './Stories'

const Home = props => {
  return (
    <div className='home'>
      <Stories /> 
      <Post/>
    </div>
  )
}


export default Home