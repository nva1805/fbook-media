import React from 'react'
import './leftBar.scss'
import DefaultAvatar from '../../../asset/image/user-default-avatar.jpg'


const LeftBar = () => {

  return (
    <div className='left-bar'>
      <div className="left-bar__item">
        <img src={DefaultAvatar} alt="" />
        <p>Nguyen Van Anh</p>
      </div>
      <div className="left-bar__item">
        <i style={
          {
            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/3Bn0FAGmIvq.png")`,
            backgroundPosition: '0 -296px',
            backgroundSize: "37px 555px",
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        >
        </i>
        <p>Friends</p>
      </div>

      <div className="left-bar__item">
        <i style={
          {
            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/oF2O6ksem0U.png")`,
            backgroundPosition: '0 0',
            backgroundSize: "37px 293px",
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        >
        </i>
        <p>Nguyen Van Anh</p>
      </div>

      <div className="left-bar__item">
        <i style={
          {
            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/3Bn0FAGmIvq.png")`,
            backgroundPosition: '0 -74px',
            backgroundSize: "37px 555px",
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        >
        </i>
        <p>Groups</p>
      </div>

      <div className="left-bar__item">
        <i style={
          {
            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/3Bn0FAGmIvq.png")`,
            backgroundPosition: '0 -407px',
            backgroundSize: "37px 555px",
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        >
        </i>
        <p>Marketplace</p>
      </div>

      <div className="left-bar__item">
        <i style={
          {
            backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/3Bn0FAGmIvq.png")`,
            backgroundPosition: '0 -0px',
            backgroundSize: "37px 555px",
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        >
        </i>
        <p>Love</p>
      </div>

      {/* short cut */}
      <hr />
      <div className="left-bar__shortcut">
        <span>Your shortcut</span>
        <div className="left-bar__item">
          <i style={
            {
              backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/3Bn0FAGmIvq.png")`,
              backgroundPosition: '0 -260px',
              backgroundSize: "37px 555px",
              backgroundRepeat: 'no-repeat',
              display: 'inline-block'
            }}
          >
          </i>
          <p>Lang Thang Đà Nẵng</p>
        </div>
        <div className="left-bar__item">
          <i style={
            {
              backgroundImage: `url("https://i.pinimg.com/564x/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '0.625rem'
            }}
          >
          </i>
          <p>One piece Group</p>
        </div>

        <div className="left-bar__item">
          <i style={
            {
              backgroundImage: `url("https://i.pinimg.com/564x/10/03/53/100353af367562a4cba9c8fccc0bb48e.jpg")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: '0.625rem'
            }}
          >
          </i>
          <p>Thủ Khoa Đại Học</p>
        </div>



      </div>
    </div >
  )
}

export default LeftBar