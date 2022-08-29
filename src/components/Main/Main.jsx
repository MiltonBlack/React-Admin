import React from 'react'
import './Main.css'
import { FaBalanceScale, FaChartLine, FaDollarSign } from 'react-icons/fa'

const Main = () => {
  return (
    <main>
        <h1>Dashboard</h1>
        <div className="date">
            <input type="date" name="date" id="" />
        </div>
        <div className="insights">
            <div className="sales">
                <span><FaBalanceScale/></span>
                <div className="middle">
                    <div className="left">
                        <h3>Total Sales</h3>
                        <h1>N250,000.00</h1>
                    </div>
                    <div className="progress">
                        <svg>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>90%</p>
                        </div>
                    </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="expenses">
                <span><FaChartLine/></span>
                <div className="middle">
                    <div className="left">
                        <h3>Total Expenses</h3>
                        <h1>N60,000.00</h1>
                    </div>
                    <div className="progress">
                        <svg>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>60%</p>
                        </div>
                    </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
            </div>
            <div className="income">
                <span><FaDollarSign/></span>
                <div className="middle">
                    <div className="left">
                        <h3>Total Income</h3>
                        <h1>N120,000.00</h1>
                    </div>
                    <div className="progress">
                        <svg>
                            <circle cx='38' cy='38' r='36'></circle>
                        </svg>
                        <div className="number">
                            <p>97%</p>
                        </div>
                    </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
            </div>
        </div>
    </main>
  )
}

export default Main