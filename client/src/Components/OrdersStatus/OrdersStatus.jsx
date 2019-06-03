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

        searchInput:'',

        requests : [
            {
                orderId:10000,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'cash',
                paid:false,
                timeOrder:'3:27 PM',
                completed:true,
                status:'Being prepared',
                timePick:'4:01 PM'
            },
            {
                orderId:10001,
                items:['Chicken biriyani' ,'Veg noodle','burger','pizza','dosa'],
                quantity:[2,5,3,3,4],
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                status:'Ready',
                completed:false,
            },
            {
                orderId:10002,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'online',
                paid:true,
                time:'3:27 PM',
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                status:'Ready',
                completed:false,
            },
            {
                orderId:10003,
                items:['Chicken biriyani' ,'Veg noodle','Chicken noodles'],
                quantity:[2,5,1],
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                completed:true,
                status:'Being prepared',
                timepick:'4:01 PM'
            },
            {
                orderId:10004,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'cash',
                paid:false,
                timeOrder:'3:27 PM',
                status:'Being prepared',
                completed:false,
            },
        ]
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

    handleChange = (e) => {
        this.setState({
            searchInput:e.target.value,
        })
    }

    searchQuery = (e) => {
        e.preventDefault()
        console.log(this.state.searchInput)
    }

    render() {
        return (
            <div className="ordersS">
                <div className='ordersS-section'>
                    <nav className="ordersS-nav">
                        <div className="ordersS-nav-search">
                            <img src={Sidebarbtn} alt="btn" className="ordersS-sidebar-img" onClick={this.openSidebar}/>
                            <div className="ordersS-search">
                                <form onSubmit={this.searchQuery}>
                                    <input type="text" className="ordersS-searchbar" placeholder='Search' onChange={this.handleChange}/>
                                    <button className="ordersS-searchbtn" type="submit"><i className="fas fa-search"></i></button>
                                </form>
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
                    {(this.state.activeTab===1) && <Requests requests={this.state.requests}/>}
                    {(this.state.activeTab===2) && <Orders requests={this.state.requests}/>}
                    {(this.state.activeTab===3) && <History requests={this.state.requests}/>}
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
