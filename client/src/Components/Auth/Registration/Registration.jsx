import React, { Component } from 'react'
import './Registration.css'
import logo from './../../../Assets/upfront.png'

export default class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div className= "RegistrationPage">
                <div className="Registration-Title">
                    <img src={logo} alt="logo"/><h3>Registration</h3>
                </div>

                <div id="reg1" className="regActive regdiv">

                    <form className="RegForm">

                        <div className="reg-form-inputs">

                            <p className="label"> Name </p>
                            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="reg-form-inputs">

                            <p className="label"> Email Id</p>
                            <input type="email" name="email" placeholder="Name" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="reg-form-inputs">

                            <p className="label"> Phone No. </p>
                            
                        </div>

                    </form>

                </div>

                <div id="reg2" className="regInactive regdiv">

                </div>

                <div id="reg3" className="regInactive regdiv">

                </div>

            </div>
        )
    }
}
