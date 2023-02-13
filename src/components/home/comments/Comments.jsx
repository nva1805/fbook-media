import React from 'react'
import './comments.scss'

const Comments = () => {
    const comments = [
        {
            id: 1,
            name: 'Tran Thanh',
            userID: 1,
            profilePic: "https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg",
            decs: 'Consectetur sint ea proident excepteur ullamco esse.'
        },
        {
            id: 2,
            name: 'Son tung',
            userID: 2,
            img: 'https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg',
            profilePic: "https://i.pinimg.com/564x/ad/6d/e4/ad6de4abac3849f24980d901c657054e.jpg",
            decs: 'Reprehenderit exercitation Lorem laborum incididunt incididunt laboris.'
        },
    ]
    return (
        <div className='comments'>
            {
                comments.map((comment) => (
                    <div className="comment">
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span><b>{comment.name}</b></span>
                            <p>{comment.decs}</p>
                        </div>
                        <span className='comment-time'>1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments