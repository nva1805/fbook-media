import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'

import { Link, useNavigate } from 'react-router-dom'
import './Posts.scss'
import Comments from '../comments/Comments'

const Post = () => {
  const navigate = useNavigate()
  const posts = [
    {
      id: 1,
      name: 'Tran Thanh',
      userID: 1,
      profilePic: "https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg",
      decs: 'Consectetur sint ea proident excepteur ullamco esse.'
    },
    {
      id: 2,
      name: 'Thanh Hoa',
      userID: 2,
      img: 'https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg',
      profilePic: "https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg",
      decs: 'Reprehenderit exercitation Lorem laborum incididunt incididunt laboris.'
    },
  ]

  const [openComment, setOpenComment] = useState(false)
  const handleOpenComment = () => {
    setOpenComment(!openComment)
  }

  return (
    <div className='posts'>
      {posts.map((post) => (
        <div div className="post" key={post.id}>
          <div className="user">
            <div className="user__info" onClick={() => navigate(`/profile/${post.userID}`)}>
              <img src={post.profilePic} alt="" />
              <div className="user__info--detail">
                <Link to={`/profile/${post.userID}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>{post.name}
                </Link>
                <span className='date'>A few time</span>
              </div>
            </div>
            <div className="title__more">
              <BsThreeDots />
            </div>
          </div>
          <div className="content">
            <p>{post.decs}</p>
            {post && post.img &&
              <img src={post.img} alt="" />
            }
          </div>
          <div className="respond">
            <div className="respond__react"><AiOutlineHeart /> Love</div>
            <div className='respond__comment'
              onClick={handleOpenComment}
            >
              <FaRegCommentDots /> Comments
            </div>
          </div>
          <div className="view-comment">
            {openComment && <Comments />}
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default Post