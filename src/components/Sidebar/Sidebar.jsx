import React from 'react'
import { FaTimes, FaBoxes, FaUserFriends, FaReceipt, FaBalanceScale, FaEnvelope, FaStore, FaExclamation, FaPlus, FaRegistered, FaBars } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ onClick, menu }) => {
    return (
        <>
            <aside className='aside'>
                <div className="top">
                    <div className="logo">
                        <h2>{menu ? "Milton" : "M"}<span className='danger'>{menu ? "Black" : "B"}</span></h2>
                    </div>
                    <div className="close" onClick={onClick}>
                        {menu ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
                {menu ? <div className="main">
                    <a href="#"><FaBoxes className='icon' /><h3>Dashboard</h3></a>
                    <a href="#"><FaUserFriends className='icon' /><h3>Customers</h3></a>
                    <a href="#" className='active'><FaReceipt className='icon' /><h3>Orders</h3></a>
                    <a href="#"><FaBalanceScale className='icon' /><h3>Analytics</h3></a>
                    <a href="#"><FaEnvelope className='icon' /><h3>Messages</h3><span className='count'>26</span></a>
                    <a href="#"><FaStore className='icon' /><h3>Products</h3></a>
                    <a href="#"><FaExclamation className='icon' /><h3>Reports</h3></a>
                    <a href="#"><FaPlus className='icon' /><h3>Add Products</h3></a>
                    <a href="#"><FaRegistered className='icon' /><h3>LogOut</h3></a>
                </div> : null}
            </aside></>
    )
}

export default Sidebar