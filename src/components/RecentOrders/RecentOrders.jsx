import React from 'react'
import './RecentOrders.css'

const RecentOrders = () => {
  return (
    <div className='recent-orders'>
        <h2>Recent Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Number</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pizza</td>
                    <td>123456</td>
                    <td>Due</td>
                    <td className='warning'>Pending</td>
                    <td className='primary'>Details</td>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>123456</td>
                    <td>Due</td>
                    <td className='warning'>Pending</td>
                    <td className='primary'>Details</td>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>123456</td>
                    <td>Due</td>
                    <td className='warning'>Pending</td>
                    <td className='primary'>Details</td>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>123456</td>
                    <td>Due</td>
                    <td className='warning'>Pending</td>
                    <td className='primary'>Details</td>
                </tr>
                <tr>
                    <td>Pizza</td>
                    <td>123456</td>
                    <td>Due</td>
                    <td className='warning'>Pending</td>
                    <td className='primary'>Details</td>
                </tr>
            </tbody>
        </table>
        <a href="#">Show All</a>
    </div>
  )
}

export default RecentOrders