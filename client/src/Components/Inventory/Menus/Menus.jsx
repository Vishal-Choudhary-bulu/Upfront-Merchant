import React, { Component } from 'react'
import './Menus.css'
import menuImg from "./../../../Assets/Mask Group 3.png"
import MenuModel from '../MenuModel/MenuModel';
export default class Menus extends Component {
    constructor(props){
        super(props);

        this.state = { 
            isEditing: false,
            ModelOpen: false,
            isApplying: false,
            categories: [
                {
                    name: "Fast Food",
                    category_id: "1AL12",
                    res_id: "FIRST"
                },
                {
                    name: "Tasty Food",
                    category_id: "1BL12",
                    res_id: "FIRST"
                },
                {
                    name: "Fast Food",
                    category_id: "1CL12",
                    res_id: "FIRST"
                },
            ],
            menus: [
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta",
                    is_veg: true,
                    photo: ""
                }
            ],
            offers:[
                {
                    offer_id: "Dyta",
                    name: "20% off",
                    res_id: "FIRST",
                    discount: 20
                },
                {
                    offer_id: "Dytb",
                    name: "30% off",
                    res_id: "FIRST",
                    discount: 30
                }

            ]
        }
    }

    handleToggle = (e)=>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleModelOpen = (e) =>{
        this.setState({
            ModelOpen: true
        })
    }

    handleCancel = (e) =>{
        this.setState({
            ModelOpen: false
        })
    }

    handleModelUpdate = (data)=>{
        

        if(data.name !== "" &&data.category_id !== "" && data.price !== "" && data.photo !== ""){
            let newMenu = data;
            newMenu.id = 2;
            let UpdatedMenus = this.state.menus;

            UpdatedMenus.push(newMenu);

            this.setState({
                menus: UpdatedMenus
            })

            this.setState({
                ModelOpen: false
            })
        }

    }

    handleDeleteMenu = (key)=>{
        let newMenus = this.state.menus.filter((menu)=>(
            menu.id !== key
        ))
        this.setState({
            menus: newMenus
        })
    }

    handleApplyOffer = (e) => {
        this.setState({
            isApplying: true
        })    
    }

    handleSave = (e) => {
        this.setState({
            isApplying: false
        })
    }

    render() {

        const menus = this.state.categories.map((c,key)=>(
            <div className = "MenusCategory" key = {key}>
                <div className="MenusCategoryTitle">
                    {c.name}
                </div>
                <div className="MenusCards">
                {this.state.menus.map((m)=>(
                    m.category_id === c.category_id? (
                        <div className="MenuCard" key= {m.id}>
                            { this.state.isEditing && <button className="DelMenuBtn" onClick={()=>(this.handleDeleteMenu(m.id))}>&#10008;</button>}
                            <div className="MenuPhoto">
                                <img src={menuImg} alt="menu"/>
                                {this.state.isApplying && <input type="checkbox" name="apply" className="offeraplBtn"/>}
                                </div>
                            <div className= "MenusNamePrice">
                                <div className="MenuName">{m.name}</div>
                                <div className="MenuPrice">Rs. {m.price* 80 / 100}</div>
                            </div>
                        </div>
                    ): (null)
                ))
                }
                </div>
            </div>
        ))

        const menuEditor = (
            <div className="MenuEditor">
                <button className="MenuEditBtns" onClick={this.handleApplyOffer}> Add Offer </button>
                <button className="MenuEditBtns" onClick = {this.handleModelOpen}> Add Item </button>
                <button className="MenuEditBtns" onClick={()=>{this.handleToggle(); this.handleCancel(); this.handleSave()}}> Update </button>
            </div>
        )

        const UpdateMenus = (
            <div className="UpdateMenus">
                    <button className="MenuEditBtns" onClick = {this.handleToggle}> Update Items </button>  
            </div>
        )

        return (
            <div className="Menus">
                {this.state.isEditing? menuEditor : UpdateMenus}
                {menus}
                {this.state.ModelOpen && <MenuModel Update = {this.handleModelUpdate} Cancel = {this.handleCancel} categories = {this.state.categories} offers  ={this.state.offers}/>}
            </div>
        )
    }
}
