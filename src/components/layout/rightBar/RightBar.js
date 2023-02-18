import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='right-bar'>
      <div className="right-bar__title">
        <span className='shortcut'>Birthday</span>
      </div>
      <div className="right-bar__item">
        <i style={
          {
            backgroundImage: `url("https://i.pinimg.com/564x/f5/ae/79/f5ae79e7a568ac8009e9f868e0b96d22.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '0.625rem'
          }}
        >
        </i>
        <p>To day is birthday of <b>Anh Tú</b> và <b>Diệu Nhi</b></p>
      </div>

      {/* contact */}
      <hr />
      <div className="right-bar__title">
        <span className='shortcut'>Contact</span>
        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/05/25/a0/0525a02971756b5c36da08d934e8a0b5.jpg" alt="" />
          <p>Anh Tú Atus</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/b3/96/48/b396488af595eb3aa8c3731483926605.jpg" alt="" />
          <p>Diệu Nhi</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/67/13/57/671357ead5792f93476bfffc895ae695.jpg" alt="" />
          <p>Trấn Thành</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/f5/ae/ba/f5aeba6b1662d45564fb2ed8f8b99d58.jpg" alt="" />
          <p>Sơn Tùng</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/c9/d8/f2/c9d8f21189ddaf9ae7f8c42d586fd897.jpg" alt="" />
          <p>Đông Nhi</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/ec/16/39/ec1639ae0acd3b35f18acd7a62462f8f.jpg" alt="" />
          <p>Justin Bieber</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/5d/6d/00/5d6d006b72e472e8cdcd6fd93ac530a6.jpg" alt="" />
          <p>Taylor Swift</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/aa/97/df/aa97df176c71790e87cd8cfd205403da.jpg" alt="" />
          <p>Charlie Puth</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/aa/14/b8/aa14b871a0dbd56356792a1230415a77.jpg" alt="" />
          <p>Đường Tam</p>
        </div>
        {/* -------------- */}
        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/05/25/a0/0525a02971756b5c36da08d934e8a0b5.jpg" alt="" />
          <p>Anh Tú Atus</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/b3/96/48/b396488af595eb3aa8c3731483926605.jpg" alt="" />
          <p>Diệu Nhi</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/67/13/57/671357ead5792f93476bfffc895ae695.jpg" alt="" />
          <p>Trấn Thành</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/f5/ae/ba/f5aeba6b1662d45564fb2ed8f8b99d58.jpg" alt="" />
          <p>Sơn Tùng</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/c9/d8/f2/c9d8f21189ddaf9ae7f8c42d586fd897.jpg" alt="" />
          <p>Đông Nhi</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/ec/16/39/ec1639ae0acd3b35f18acd7a62462f8f.jpg" alt="" />
          <p>Justin Bieber</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/5d/6d/00/5d6d006b72e472e8cdcd6fd93ac530a6.jpg" alt="" />
          <p>Taylor Swift</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/736x/aa/97/df/aa97df176c71790e87cd8cfd205403da.jpg" alt="" />
          <p>Charlie Puth</p>
        </div>

        <div className="right-bar__item--contact">
          <img src="https://i.pinimg.com/564x/aa/14/b8/aa14b871a0dbd56356792a1230415a77.jpg" alt="" />
          <p>Đường Tam</p>
        </div>




      </div>
    </div >
  )
}

export default RightBar
