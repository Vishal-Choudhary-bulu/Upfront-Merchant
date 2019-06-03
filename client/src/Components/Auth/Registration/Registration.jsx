import React, { Component } from 'react'
import './Registration.css'
import logo from './../../../Assets/upfront.png'
import { yellow } from 'ansi-colors';

export default class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            isBackDisabled : true,
            regdiv : 1,
            name: "",
            email: "",
            Phone: "",
            CountryCode: 91,
            shopName : "",
            shopAdress : "",
            GSTNumber: "",
            GSTCopy: "",
            LicenseNumber :"",
            LicenseCopy : "",
            PANNumber: "",
            PANCopy : ""
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChangePhone = (e)=>{
        this.setState({
            Phone: String(e.target.value).length <= 10 ? (e.target.value) : (this.state.Phone)
        })
    }

    handleBack = (e)=> {
        let index = this.state.regdiv;

        if(index === 1){
            console.log("hahaahhahaha")
        }
        else if(index === 2){
            this.setState({
                regdiv : 1,
                isBackDisabled : true
            })
        }
        else if(index === 3){
            this.setState({
                regdiv : 2
            })
        } 
    }

    handleNext = (e)=>{
        let index = this.state.regdiv;
        if(index === 1){
            this.setState({
                regdiv : 2,
                isBackDisabled : false
            })
        }
        else if(index === 2){
            this.setState({
                regdiv : 3
            })
        }
        else if(index === 3){
            console.log("form submitted")
        }
        
    }

    render() {
        const currentDiv = this.state.regdiv === 1 ? (

            <div id="reg1" className="regdiv">

                <form className="RegForm">

                    <div className="reg-form-inputs">

                        <p className="label"> Name </p>
                        <input type="text" name="name" className="Verify-Input-bar" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="reg-form-inputs">

                        <p className="label"> Email Id</p>
                        <input type="email" name="email" className="Verify-Input-bar" placeholder="Name" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="reg-form-inputs">

                        <p className="label"> Mobile Number </p>
                        <div className="VerifyPhoneCode" >
                            <select className="Verify-CountryCode"  name= "CountryCode" value = {this.state.CountryCode} onChange= {this.handleChange} required >
                                <option defaultValue >91</option>
                                <option>0</option>
                                <option>21</option>
                                <option>11</option>
                                <option>41</option>
                            </select>
                            <input type="string" name="Phone" className="Verify-Input-bar-phone" placeholder="Mobile Number" value = {this.state.Phone} onChange={this.handleChangePhone} autoComplete="off" />
                </div>
            </div>

        </form>

    </div>
    ): (this.state.regdiv === 2? (
            <div id="reg2" className="regdiv">

                {/* more code here */}
               <div className="reg-form-inputs">
                        <p className="label"> Name </p>
                        <input type="text" name="shopName" className="Verify-Input-bar" placeholder="Shop Name" value={this.state.shopName} onChange={this.handleChange} />
                </div>

                <div className="reg-form-inputs">
                        <p className="label"> Shop Adress </p>
                        <input type="text" name="shopAdress" className="Verify-Input-bar" placeholder="Shop Address" value={this.state.shopAdress} onChange={this.handleChange} />
                </div>

                <div className="reg-form-inputs">
                        <p className="label"> GST number with photocopy </p>
                        <input type= "text" name="GSTNumber" className="Verify-Input-bar" placeholder="GST Number" value={this.state.GSTNumber} onChange={this.handleChange} />
                        <input type="file" name="GSTCopy" className="FileInput" accept="image/png, image/jpeg" value = {this.state.GSTCopy} onChange = {this.handleChange}/> 
                        
                </div>

            </div>
    ):
    (
            <div id="reg3" className="regdiv">


                <div className="reg-form-inputs">
                        <p className="label"> License number with photocopy </p>
                        <input type= "text" name="LicenseNumber" className="Verify-Input-bar" value={this.state.LicenseNumber} onChange={this.handleChange} />
                        <input type="file" name="LicenseCopy" className="FileInput" accept="image/png, image/jpeg" value = {this.state.LicenseCopy} onChange = {this.handleChange}/>
                </div>

                <div className="reg-form-inputs">
                        <p className="label"> PAN number with photocopy </p>
                        <input type= "text" name="PANNumber" className="Verify-Input-bar" value={this.state.PANNumber} onChange={this.handleChange} />
                        <input type="file" name="PANCopy" className="FileInput" accept="image/png, image/jpeg" value = {this.state.PANCopy} onChange = {this.handleChange}/>
                </div>



            </div>
    ))

    const ylbg = {
        backgroundColor: "yellow"
    }
    const ylbdr = {
        borderTop: "2px solid yellow"
    }

        return (

                <div className= "RegistrationPage">
                    <div className="Registration-Title">
                        <img src={logo} alt="logo"/><h3>Registration</h3>
                    </div>
                    <div className="RegFormfields">
                        {currentDiv}
                    
                        <div className="regBtns">
                            <button id="regbackbtn"  onClick={this.handleBack} disabled = {this.state.isBackDisabled}> Back </button>
                            <button id="regnextbtn" onClick={this.handleNext} >{this.state.regdiv < 3 ? ( "Next" ) : ("Submit")} </button>
                        </div>
                    </div>
                    <div className="StepIcons">
                        <div className="stepIcon" style = {ylbg}> {this.state.regdiv >= 2? (<i className="fas fa-check"></i>): 1}</div>
                        <span className="reg-line" style = {this.state.regdiv >= 2 ? ylbdr : {}}></span>
                        <div className="stepIcon" style = {this.state.regdiv >= 2 ? ylbg : {}}>{this.state.regdiv >= 3? (<i className="fas fa-check"></i>): 2}</div>
                        <span className="reg-line" style = {this.state.regdiv >= 3 ? ylbdr : {}}></span>
                        <div className="stepIcon" style = {this.state.regdiv >= 3 ? ylbg : {}}>3</div>
                    </div>
            </div>
        )
    }
}
