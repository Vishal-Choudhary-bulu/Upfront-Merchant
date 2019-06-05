import React, { Component } from 'react'
import Logo from '../../Assets/logo.png'
import Photo from '../../Assets/Mask Group 7@2x.png'
import Img from '../../Assets/Mask Group 6.png'
import "./Profile.css"

export default class Profile extends Component {

    state = {

        modifyBranch:false,
        adminUpdate:false,
        adminName:"Jessica James",
        adminPhone:"1234567890",
        adminEmail:"jesica@gmail.com",
        adminLocation:"32, walter highway, luxa street North London, Europe.",

        
            restName:'Richmond café and restaurant',
            restCuisines: ['Vegetarian', 'Non-Vegetarian', 'Chinese'],
            restPhone: ' 1234567890',
            restLocation:"32, walter highway, luxa street North London, Europe.",
            restGst:'QWERT12345',
            restPan:'ASDFG6789',
            restOptime: '8:00 AM',
            restCltime: '10:00 PM',
            restBranches:['Indira nagar-- 32, walter highway, luxa street, North London, Europe.','Indira nagar-- 2/5, kiddy corner, 3rd street, London, Europe.','Koramangala-- 2/5, kiddy corner, 3rd street, London, Europe.' ]
        
    }

    toggleAdminUpdate = () => {
        this.setState({
            adminUpdate:!this.state.adminUpdate,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    render() {

        const Cuisines = this.state.restCuisines.map((e)=>(e+" "))

        return (
            <div className="profile">
                <div className="admin">
                    <img src={Logo} alt="logo" className="admin-logo"/>
                    <div className="admin-title profile-normal-txt">Admin details</div>
                    <div className="admin-pic-wrap">
                        <img src={Photo} alt="photo" className="admin-pic"/>
                    </div>
                    {!this.state.adminUpdate && <div className="admin-details profile-normal-txt">
                        <div>{this.state.adminName}</div>
                        <div>{this.state.adminPhone}</div>
                        <div>{this.state.adminEmail}</div>
                        <div>{this.state.adminLocation}</div>    
                        <button className="admin-update-btn" onClick={this.toggleAdminUpdate}>Update</button>
                    </div>}
                    {this.state.adminUpdate && 
                        <form onSubmit={this.toggleAdminUpdate}  className="admin-update-details profile-normal-txt">
                            <label>
                                Name:<br/>
                                <input type="text" name='adminName' value={this.state.adminName} onChange={this.handleChange}/>
                            </label>
                            <label>
                                Phone:<br/>
                                <input type="tel" name='adminPhone' value={this.state.adminPhone} onChange={this.handleChange}/>
                            </label>
                            <label>
                                Email:<br/>
                                <input type="email" name='adminEmail' value={this.state.adminEmail} onChange={this.handleChange}/>
                            </label>
                            <label>
                                Location:<br/>
                                <input type="text" name='adminLocation' value={this.state.adminLocation} onChange={this.handleChange}/>
                            </label><br/>
                            <button className="admin-update-btn">Update</button>  
                        </form>  
                    }
                </div>
                <div className="profile-rest">    
                    <nav className='profile-nav'>
                        <ul>
                            <li><i className="fas fa-home"></i>Home</li>
                            <li className="ylbg profile-nav-btn">Statistics</li>
                            <li><i className="fas fa-sign-out-alt"></i>Logout</li>
                        </ul>
                    </nav>
                    <div className="profile-rest-title profile-normal-txt">Restaurant details</div>
                    <div className="profile-rest-header">
                        <div className="profile-rest-img-wrap">
                            <img src={Img} alt="image" className="profile-rest-img"/>
                        </div>
                        <div>                  
                            <div className="profile-rest-des-wrap">
                                <div className="profile-bold-txt profile-rest-name">{this.state.restName}</div>
                                <div className="profile-rest-rem-txt">{Cuisines}</div>
                                <div className="profile-rest-rem-txt" ><i className="fas fa-phone-volume"></i>{this.state.restPhone}</div>
                            </div>
                        </div>  
                    </div>
                    <div className="profile-rest-timings">{this.state.restOptime} - {this.state.restCltime}</div>
                    <div className="profile-rest-details">
                        <div className="profile-gst-pan">
                            <div className="profile-gst">
                                <div className="profile-bold-txt" >GST number</div>
                                <div className="profile-normal-txt">{this.state.restGst}</div>
                            </div>
                            <div className="profile-pan">
                                <div className="profile-bold-txt" >PAN number</div>
                                <div className="profile-normal-txt">{this.state.restPan}</div>
                            </div>
                        </div>
                        <div className="profile-rest-location-wrap">
                            <div className="profile-bold-txt" >Location</div>
                            <div className="profile-normal-txt profile-rest-location">{this.state.restLocation}</div>
                        </div>
                        <div className="profile-bold-txt" >Landmarks nearby</div>
                    </div>
                </div>
            </div>
        )
    }
}
