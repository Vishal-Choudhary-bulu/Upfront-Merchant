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
            branches:[ ]
        }
    }

    

    render() {

        const Cuisines = this.state.restaurant.cuisines.map((e)=>(e+" "))

        return (
            <div className="profile">
                <div className="admin">
                    <img src={Logo} alt="logo" className="admin-logo"/>
                    <h2 className="admin-title">Admin details</h2>
                    <div className="admin-pic-wrap">
                        <img src={Photo} alt="photo" className="admin-pic"/>
                        <i className="fal fa-plus-circle"></i>
                    </div>
                    <div>{this.state.admin.name}</div>
                    <div>{this.state.admin.phone}</div>
                    <div>{this.state.admin.email}</div>
                    <div>{this.state.admin.location}</div>
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
                    <h2 className="profile-rest-title">Restaurant details</h2>
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
                    <div>Ratings</div>
                    <div>Reviews <button>See all reviews</button></div>
                    <div>
                        <div>
                            <div>GST number</div>
                            <div>{this.state.restaurant.gst}</div>
                        </div>
                        <div>
                            <div>PAN number</div>
                            <div>{this.state.restaurant.pan}</div>
                        </div>
                    </div>
                    <div>Location</div>
                    <div>{this.state.restaurant.location}</div>
                    <div>Landmarks nearby</div>
                    <div></div>
                    <div>Other branches  <i class="fas fa-plus-circle"></i>Add/Modify branch</div>
                    <div></div>
                    <div>Customer support</div>
                    <div className="profile-supp-btns">
                        <button className="ylbg">Complaints</button>
                        <button className="ylbg">Feedbacks</button>
                    </div>
                </div>
            </div>
        )
    }
}
