import React, { Component } from 'react'
import logo from './../../../Assets/logo.png'
import './Login.css'

export default class Login extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            Phone: "",
            OTP: ""
        }

    }

    handleChangePhone = (e)=>{
        this.setState({
            "Phone" : e.target.value
        })
    }

    handleChangeOtp = (e)=>{
        this.setState({
            "OTP" : e.target.value
        })
    }

    handlePhone = (e)=>{
        e.preventDefault();
        console.log("submitted the phone number wait for the otp....")
        console.log(this.state.Phone)
        //api to send otp to the submitted phone number
        const LoginPhonediv = document.getElementById("Login-Phone-div");
        const LoginOTPdiv = document.getElementById("Login-OTP-div");

        LoginPhonediv.classList.remove("Login-Input");
        LoginPhonediv.classList.add("DisplayNone");
        LoginOTPdiv.classList.remove("DisplayNone");
        LoginOTPdiv.classList.add("Login-Input");

    }

    handleLogin = (e)=>{
        e.preventDefault();
        console.log("welcome mr. whose phone number is : " + this.state.Phone)
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="Login-brightSide">

                    <div className="Login-Title">
                        Login to<img src={logo} alt="logo"/>
                    </div>

                    <form onSubmit= {this.handlePhone}  className="Login-Input" id="Login-Phone-div">
                        
                        <div className="LoginPhoneCode">
                            <select className="Login-CountryCode">
                            <option>+91</option>
                            <option>0</option>
                            <option>21</option>
                            <option>115</option>
                            <option>211</option>
                            </select>
                            <input type="string" name="Phone" className="Login-Input-bar" placeholder="Phone Number" onChange={this.handleChangePhone} value={this.state.Phone} />
                        </div>
                            <button className="Login-Btn" onClick={this.handlePhone}>
                                Send OTP
                             </button>
                        <div className="bltxt toggle-auth">New User? Sign UP!</div>
                    </form>

                    <form className="DisplayNone" id="Login-OTP-div" onSubmit = {this.handleLogin}>
                        <input type="string" name="OTP" className="Login-Input-bar" placeholder="Enter OTP" onChange={this.handleChangeOtp} value={this.state.OTP} />
                            <button className="Login-Btn" onClick={this.handleLogin}>
                                Login
                            </button>
                    </form>

                </div>
                <div className="Login-darkSide">

                </div>
            </div>
        )
    }
}
