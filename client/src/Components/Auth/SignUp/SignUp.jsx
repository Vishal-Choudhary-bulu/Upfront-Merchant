import React, { Component } from 'react'
import './SignUp.css'
import logo from './../../../Assets/logo.png' 

export default class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = { 
            name: "",
            email : "",
            Phone: "",
            CountryCode : ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChangePhone = (e)=>{
        this.setState({
            "Phone" : String(e.target.value).length <= 10? (e.target.value) : (this.state.Phone)
        })
    }

    handleSignUp = (e) =>{
        e.preventDefault();
        console.log(" signing up "+ this.state.name)
        this.setState({
            name: "",
            email: "",
            Phone: "",
            CountryCode: ""
        })
    }
    render() {
        return (
            <div className="SignupPage">
                <div className="SignUp-brightSide">

                <div className="SignUp-Title">
                         SignUp to<img src={logo} alt="logo"/>
                </div>

                <form className="SignUp-Form" onSubmit = {this.handleSignUp}>
                    <input type="text" name= "name" required placeholder= "Merchant Name" value = {this.state.name} onChange={this.handleChange} />
                    <input type="email" name="email" placeholder= "Email Id" value = {this.state.email} onChange={this.handleChange} required />
                    <div className="SignUpPhoneCode" >
                        <select className="SignUp-CountryCode" name= "CountryCode" value = {this.state.CountryCode} onChange= {this.handleChange} required >
                        <option defaultValue>...</option>
                        <option>91</option>
                        <option>0</option>
                        <option>21</option>
                        <option>11</option>
                        <option>41</option>
                        </select>
                        <input type="string" name="Phone" className="SignUp-Input-bar" placeholder="Phone Number" onChange={this.handleChangePhone} value={this.state.Phone} autoComplete="off" autoFocus required />
                    </div>
                    <button className="SignUp-Btn" onClick={this.handleSignUp}> 
                        SignUp
                    </button>
                </form>

                </div>

                <div className="SignUp-darkSide">
                </div>
            </div>
        )
    }
}
