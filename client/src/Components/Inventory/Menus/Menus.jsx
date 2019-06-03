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
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta"
                },
                {
                    name: "burger",
                    price: 80,
                    category_id: "1AL12",
                    offer_id: "Dyta"
                },
                {
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "Dyta"
                },
                {
                    name: "sandwich",
                    price: 50,
                    category_id: "1BL12",
                    offer_id: "Dyta"
                },
                {
                    name: "pizza",
                    price: 120,
                    category_id: "1BL12",
                    offer_id: "Dyta"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
                {
                    name: "burger",
                    price: 90,
                    category_id: "1CL12",
                    offer_id: "Dytb"
                },
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

    render() {

        const menus = this.state.categories.map((c,key)=>(
            <div className = "MenusCategory" key = {key}>
                <div className="MenusCategoryTitle">
                    {c.name}
                </div>
                <div className="MenusCards">
                {this.state.menus.map((m, k)=>(
                    m.category_id === c.category_id? (
                        <div className="MenuCard" key= {k}>
                            <div className="MenuPhoto">
                                <img src={menuImg} alt="menu"/>

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
                <button className="MenuEditBtns"> Add Offer </button>
                <button className="MenuEditBtns" onClick = {this.handleModelOpen}> Add Item </button>
                <button className="MenuEditBtns" onClick={this.handleToggle}> Update </button>
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
                {this.state.ModelOpen && <MenuModel />}
            </div>
        )
    }
}
