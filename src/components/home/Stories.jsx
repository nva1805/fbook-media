import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import './stories.scss'

const Stories = () => {
    const stories = [
        {
            id: 1,
            name: 'Sơn Tùng',
            img: 'https://i.pinimg.com/564x/f3/d2/c8/f3d2c8e7dce01a5552fd903a5448642c.jpg'
        },
        {
            id: 2,
            name: 'Sơn Tùng',
            img: 'https://i.pinimg.com/564x/f3/d2/c8/f3d2c8e7dce01a5552fd903a5448642c.jpg'
        },
        {
            id: 3,
            name: 'Sơn Tùng',
            img: 'https://i.pinimg.com/564x/7c/7a/3b/7c7a3b2a82c0ffa591ae13a3ee9162b7.jpg'
        },
        // {
        //     id: 4,
        //     name: 'Sơn Tùng',
        //     img: 'https://i.pinimg.com/564x/7c/7a/3b/7c7a3b2a82c0ffa591ae13a3ee9162b7.jpg'
        // },
        // {
        //     id: 5,
        //     name: 'Sơn Tùng',
        //     img: 'https://i.pinimg.com/564x/7c/7a/3b/7c7a3b2a82c0ffa591ae13a3ee9162b7.jpg'
        // }
    ]
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='stories'>
            <div className="stories__story">
                <img src={currentUser.profilePic} alt="" />
                <div className='stories__story--mine'>
                    <button>+</button>
                    <span>{currentUser.name}</span>
                </div>

            </div>

            {stories.map((item, index) => (
                <div key={index} className="stories__story">
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories