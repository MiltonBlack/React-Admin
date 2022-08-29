import React, { useRef } from 'react'
import { FaBars, FaMoon, FaSun, FaShoppingCart, FaPlusCircle } from 'react-icons/fa'
import './Top.css'

const Top = ({onClick}) => {

    const themeToggle = useRef();
    // console.log(themeToggle)
    // themeToggle.className.add('active');
    // const themeToggle = document.querySelector('theme-toggle');
    // themeToggle.addEventListener('click',  document.body.classList.toggle('dark-theme-variables'));
  return (
    <div className='right'>
        <div className="top">
            <button onClick={onClick}>
                <FaBars/>
            </button>
            <div className="theme-toggle" ref={themeToggle}>
                <FaSun className='icon active'/><FaMoon className='icon'/>
            </div>
            <div className="profile">
                <div className="info">
                    <p>Welcome <b>Milton</b></p>
                    <small className='text-muted'>Admin</small>
                </div>
                <div className="profile-pic">
                    <img src="/asset/profile.jpg" alt="" width='50px' height='50px' style={{borderRadius:'50%', objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        <div className="recent-updates">
            <h2>Recent Updates</h2>
            <div className="updates">
                <div className="update">
                    <div className="profile-pic">
                        <img src="/asset/profile.jpg" alt="" width='50px' height='50px' style={{borderRadius:'50%', objectFit: 'cover'}}/>
                    </div>
                    <div className="message">
                        <p><b>Don Paguru</b> recieved an order of Iphone 13proMax</p>
                        <small className='text-muted'>
                            2 minutes ago
                        </small>
                    </div>
                </div>
                <div className="update">
                    <div className="profile-pic">
                        <img src="/asset/profile.jpg" alt="" width='50px' height='50px' style={{borderRadius:'50%', objectFit: 'cover'}}/>
                    </div>
                    <div className="message">
                        <p><b>Don Paguru</b> recieved an order of Iphone 13proMax</p>
                        <small className='text-muted'>
                            2 minutes ago
                        </small>
                    </div>
                </div>
                <div className="update">
                    <div className="profile-pic">
                        <img src="/asset/profile.jpg" alt="" width='50px' height='50px' style={{borderRadius:'50%', objectFit: 'cover'}}/>
                    </div>
                    <div className="message">
                        <p><b>Don Paguru</b> recieved an order of Iphone 13proMax</p>
                        <small className='text-muted'>
                            2 minutes ago
                        </small>
                    </div>
                </div>
                <div className="update">
                    <div className="profile-pic">
                        <img src="/asset/profile.jpg" alt="" width='50px' height='50px' style={{borderRadius:'50%', objectFit: 'cover'}}/>
                    </div>
                    <div className="message">
                        <p><b>Don Paguru</b> recieved an order of Iphone 13proMax</p>
                        <small className='text-muted'>
                            2 minutes ago
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="analytics">
            <h2>Sales Analytics</h2>
            <div className="item online">
                <div className="icon">
                    <FaShoppingCart/>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>ONLINE ORDERS</h3>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                    <h5 className='success'>
                        +39%
                    </h5>
                    <h3>3879</h3>
                </div>
            </div>
            <div className="item offline">
                <div className="icon">
                    <FaShoppingCart/>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>OFFLINE ORDERS</h3>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                    <h5 className='danger'>
                        -15%
                    </h5>
                    <h3>459</h3>
                </div>
            </div>
            <div className="item customers">
                <div className="icon">
                    <FaShoppingCart/>
                </div>
                <div className="right">
                    <div className="info">
                        <h3>NEW CUSTOMERS</h3>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>
                    <h5 className='success'>
                        +39%
                    </h5>
                    <h3>2479</h3>
                </div>
            </div>
            <div className="item online"></div>
            <div className="item add-product">
                <div>
                    <FaPlusCircle/>
                    <h3>Add Product</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top