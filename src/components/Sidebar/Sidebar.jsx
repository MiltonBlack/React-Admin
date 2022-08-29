import React from 'react'
import { FaTimes, FaBoxes, FaUserFriends, FaReceipt, FaBalanceScale, FaEnvelope, FaStore, FaExclamation, FaPlus, FaUserCheck, FaRegistered } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({onClick, menu}) => {
  return (
    <>
    { menu ? 
    <aside className='aside'>
        <div className="top">
            <div className="logo">
                <h2>Milton<span className='danger'>Black</span></h2>
            </div>
            <div className="close" onClick={onClick}>
                <FaTimes/>
            </div>
        </div>
        <div className="main">
            <a href="#"><FaBoxes className='icon'/><h3>Dashboard</h3></a>
            <a href="#"><FaUserFriends className='icon'/><h3>Customers</h3></a>
            <a href="#" className='active'><FaReceipt className='icon'/><h3>Orders</h3></a>
            <a href="#"><FaBalanceScale className='icon'/><h3>Analytics</h3></a>
            <a href="#"><FaEnvelope className='icon'/><h3>Messages</h3><span className='count'>26</span></a>
            <a href="#"><FaStore className='icon'/><h3>Products</h3></a>
            <a href="#"><FaExclamation className='icon'/><h3>Reports</h3></a>
            <a href="#"><FaPlus className='icon'/><h3>Add Products</h3></a>
            <a href="#"><FaRegistered className='icon'/><h3>LogOut</h3></a>
        </div>
    </aside> : null}</>
  )
}

export default Sidebar