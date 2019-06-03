import React, { Component } from 'react'
import './Orders.css'
import Sidebarbtn from '../../Assets/Group 6.png'
import Querybtn from '../../Assets/help-web-button.png'
import Requestsbtn from '../../Assets/icon (1).png'
import Paybtn from '../../Assets/wallet-with-money.png'
import Orderbtn from '../../Assets/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png'
import Hisbtn from '../../Assets/history-clock-button.png'
import Requests from '../Requests/Requests'

const style1 = {
    justifyContent:'center'
}

const style2 = {
    justifyContent:'flex-end'
}

export default class Orders extends Component {

    state = {
        sidebarOpn: false,
        profileOpn: false,
        activeTab:1,
    }

    openSidebar = () => {
        this.setState({
            sidebarOpn : !this.state.sidebarOpn
        })
    }

    openProfile = () => {
        this.setState({
            profileOpn: !this.state.profileOpn
        })
    }

    updateActive = (e) => {
        this.setState({
            activeTab:e

        })
    }

    render() {
        return (
            <div className="orders">
                <div className='orders-section'>
                    <nav className="orders-nav">
                        <div className="orders-nav-search">
                            <img src={Sidebarbtn} alt="btn" className="orders-sidebar-img" onClick={this.openSidebar}/>
                            <div className="orders-search">
                                <input type="text" className="orders-searchbar" placeholder='Search'/>
                                <i className="fas fa-search orders-searchbtn"></i>
                            </div>
                        </div>
                        <div className="orders-nav-profile">
                            <button><img src={Querybtn} alt="btn"/>Queries</button>
                            <button onClick={this.openProfile}><img src={Querybtn} alt="btn"/>Diwaker</button>
                        </div>
                    </nav>
                    {
                        this.state.profileOpn && (<div className="orders-profile-box">
                        <div>My Profile</div>
                        <div>Dashboard</div>
                        <div>Logout</div>
                        </div>)
                    }
                        <Requests />
                    {/* <div>
                        <ul className='orders-typelist'>
                            <li><button onClick={()=>this.updateActive(1)}>All</button></li>
                            <li><button onClick={()=>this.updateActive(2)}>Processing</button></li>
                            <li><button onClick={()=>this.updateActive(3)}>Completed</button></li>
                        </ul>
                    </div>
                    <div className='orders-graybar' style={this.state.activeTab==2?style1:(this.state.activeTab!==1?style2:{})}>
                        {(this.state.activeTab===1) && (<div className="orders-orangebar"></div>)}
                        {(this.state.activeTab===2) && (<div className="orders-orangebar"></div>)}
                        {(this.state.activeTab===3) && (<div className="orders-orangebar"></div>)}
                    </div>*/}
                </div> 
                {
                    this.state.sidebarOpn && (<div className="orders-sidebar">
                        <div><img src={Orderbtn} alt="order"/><button>Requests</button></div>
                        <div><img src={Requestsbtn} alt="req"/><button>Orders</button></div>
                        <div><img src={Hisbtn} alt="history"/><button>History</button></div>
                    </div>)
                }
            </div>
        )
    }
}
