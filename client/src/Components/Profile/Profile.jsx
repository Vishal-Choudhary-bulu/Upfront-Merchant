import React, { Component } from 'react'
import Logo from '../../Assets/logo.png'
import Photo from '../../Assets/Mask Group 7@2x.png'
import Img from '../../Assets/Mask Group 6.png'
import "./Profile.css"

export default class Profile extends Component {

    state = {
        admin : {
            name:"Jessica James",
            phone:"1234567890",
            email:"jesica@gmail.com",
            location:"32, walter highway, luxa street North London, Europe."
        },

        restaurant: {
            name:'Richmond café and restaurant',
            cuisines: ['Vegetarian', 'Non-Vegetarian', 'Chinese'],
            phone: '1234567890',
            location:"32, walter highway, luxa street North London, Europe.",
            rating:4.5,
            gst:'QWERT12345',
            pan:'ASDFG6789',
            optime: '8 A.M.',
            cltime: '10 P.M.',
            branches:['Indira nagar-- 32, walter highway, luxa street, North London, Europe.','Indira nagar-- 2/5, kiddy corner, 3rd street, London, Europe.','Koramangala-- 2/5, kiddy corner, 3rd street, London, Europe.' ]
        }
    }

    

    render() {

        const Cuisines = this.state.restaurant.cuisines.map((e)=>(e+" "))
        const Branches = this.state.restaurant.branches.map((e,key)=>{
            return (
                <div>{(key+1)+'. '+e}</div>
            )
        })

        return (
            <div className="profile">
                <div className="admin">
                    <img src={Logo} alt="logo" className="admin-logo"/>
                    <div className="admin-title profile-normal-txt">Admin details</div>
                    <div className="admin-pic-wrap">
                        <img src={Photo} alt="photo" className="admin-pic"/>
                        <i className="fal fa-plus-circle"></i>
                    </div>
                    <div className="admin-details profile-normal-txt">
                        <div>{this.state.admin.name}</div>
                        <div>{this.state.admin.phone}</div>
                        <div>{this.state.admin.email}</div>
                        <div>{this.state.admin.location}</div>
                    </div>    
                    <button className="admin-update-btn">Update</button>
                </div>
                <div className="profile-rest">    
                    <nav className='profile-nav'>
                        <ul>
                            <li>Home</li>
                            <li className="ylbg">Statistics</li>
                            <li>Logout</li>
                        </ul>
                    </nav>
                    <div className="profile-rest-title profile-normal-txt">Restaurant details</div>
                    <div className="profile-rest-header">
                        <div>
                            <img src={Img} alt="image" className="profile-rest-img"/>
                        </div>
                    </div>
                    <div>
                        <div>{this.state.restaurant.name}</div>
                        <div>{Cuisines}</div>
                    <div>{this.state.restaurant.phone}</div>
                    </div>
                    <div>{this.state.restaurant.optime} - {this.state.restaurant.cltime}</div>
                    <div className="profile-rest-details">
                        <div className="profile-bold-txt" >Ratings</div>
                        <div className="profile-bold-txt" >Reviews <button>See all reviews</button></div>
                        <div className="profile-gst-pan">
                            <div>
                                <div className="profile-bold-txt" >GST number</div>
                                <div>{this.state.restaurant.gst}</div>
                            </div>
                            <div>
                                <div className="profile-bold-txt" >PAN number</div>
                                <div>{this.state.restaurant.pan}</div>
                            </div>
                        </div>
                        <div className="profile-rest-location-wrap">
                            <div className="profile-bold-txt" >Location</div>
                            <div>{this.state.restaurant.location}</div>
                        </div>
                        <div className="profile-bold-txt" >Landmarks nearby</div>
                        <div className="profile-rest-bracher-wrap">
                            <div className="profile-bold-txt" >Other branches  <i class="fas fa-plus-circle"></i>Add/Modify branch</div>
                            <div className="profile-rest-branches">{Branches}</div>
                        </div>
                        <div className="profile-bold-txt" >Customer support</div>
                    </div>
                    <div className="profile-supp-btns">
                        <button className="ylbg">Complaints</button>
                        <button className="ylbg">Feedbacks</button>
                    </div>
                </div>
            </div>
        )
    }
}
