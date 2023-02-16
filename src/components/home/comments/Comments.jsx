import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'

const Comments = (props) => {
    const {postId} = props
    const { currentUser } = useContext(AuthContext)
    // const input = useRef(null);
    // useEffect(() => {
    //     input.current.focus()
    // })

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
            <div className="write">
                <div className="currentUser">
                    <img src={currentUser.profilePic} alt="" />
                    {/* <span>{currentUser.name}</span> */}
                </div>
                <input type="text" placeholder='Write a comment...'
                    // ref={input}
                    autoFocus
                />
                <button className='btn btn-primary'>Send</button>
            </div>
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