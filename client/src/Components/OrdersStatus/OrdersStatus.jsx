import React, { Component } from 'react'
import './OrdersStatus.css'
import Sidebarbtn from '../../Assets/Group 6.png'
import Querybtn from '../../Assets/help-web-button.png'
import Requestsbtn from '../../Assets/icon (1).png'
import Orderbtn from '../../Assets/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png'
import Hisbtn from '../../Assets/history-clock-button.png'
import Requests from '../Requests/Requests'
import Orders from '../Orders/Orders'
import History from '../History/History'


export default class ordersStatus extends Component {

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
            activeTab:e,
            sidebarOpn : !this.state.sidebarOpn
        })
    }

    render() {
        return (
            <div className="ordersS">
                <div className='ordersS-section'>
                    <nav className="ordersS-nav">
                        <div className="ordersS-nav-search">
                            <img src={Sidebarbtn} alt="btn" className="ordersS-sidebar-img" onClick={this.openSidebar}/>
                            <div className="ordersS-search">
                                <input type="text" className="ordersS-searchbar" placeholder='Search'/>
                                <i className="fas fa-search ordersS-searchbtn"></i>
                            </div>
                        </div>
                        <div className="ordersS-nav-profile">
                            <button><img src={Querybtn} alt="btn"/>Queries</button>
                            <button onClick={this.openProfile}><img src={Querybtn} alt="btn"/>Diwaker</button>
                        </div>
                    </nav>
                    {
                        this.state.profileOpn && (<div className="ordersS-profile-box">
                        <div>My Profile</div>
                        <div>Dashboard</div>
                        <div>Logout</div>
                        </div>)
                    }
                    {(this.state.activeTab===1) && <Requests />}
                    {(this.state.activeTab===2) && <Orders />}
                    {(this.state.activeTab===3) && <History />}
                </div> 
                {
                    this.state.sidebarOpn && (<div className="ordersS-sidebar">
                        <div><img src={Orderbtn} alt="order"/><button onClick={()=>this.updateActive(1)}>Requests</button></div>
                        <div><img src={Requestsbtn} alt="req"/><button onClick={()=>this.updateActive(2)}>Orders</button></div>
                        <div><img src={Hisbtn} alt="history"/><button onClick={()=>this.updateActive(3)}>History</button></div>
                    </div>)
                }
            </div>
        )
    }
}
