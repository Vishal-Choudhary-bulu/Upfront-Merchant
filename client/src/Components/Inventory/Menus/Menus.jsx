import React, { Component } from 'react'
import uuid from 'uuid'
import './Menus.css'
import cake from './../../../Assets/Mask Group 4.png'
import MenuModel from '../MenuModel/MenuModel';
export default class Menus extends Component {
    constructor(props){
        super(props);

        this.state = { 
            isEditing: false,
            ModelOpen: false,
            isApplying: false,
            SelectedOffer_id: "", 
            AllToSave: [], 
            categories: [
                {
                    name: "Fast Food",
                    category_id: "1AL12",
                    res_id: "FIRST",
                    offerAll: false
                },
                {
                    name: "Tasty Food",
                    category_id: "1BL12",
                    res_id: "FIRST",
                    offerAll: false
                },
                {
                    name: "Fast Food",
                    category_id: "1CL12",
                    res_id: "FIRST",
                    offerAll: false
                },
            ],
            menus: [
                {
                    id: 1,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "",
                    is_veg: true,
                    photo: "",
                },
                {
                    id: 2,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 3,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 4,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "",
                    is_veg: true,
                    photo: ""
                },
                {
                    id: 5,
                    name: "pizza",
                    price: 120,
                    category_id: "1AL12",
                    offer_id: "",
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
            newMenu.id = uuid();
            let UpdatedMenus = this.state.menus;

            UpdatedMenus.push(newMenu);

            this.setState({
                menus: UpdatedMenus
            })

            this.setState({
                ModelOpen: false
            })
        }
        else{
            alert("please fill all the details related to the new item")
        }

    }

    handleDeleteMenu = (key)=>{
        let newMenus = this.state.menus.filter((menu)=>(
            menu.id !== key
        ))

        let newIDs = this.state.AllToSave.filter(id=>(id!==key))
        this.setState({
            menus: newMenus,
            AllToSave: newIDs
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

    handleOfferSelection = (e) =>{
            this.setState({
                SelectedOffer_id : e.target.value
            })
    }

    handleOfferonOne = (id) =>{
        let ids = this.state.AllToSave
                
            if(!ids.includes(id))ids.push(id)
            else{
                ids = ids.filter(i=>(i !==id))
            }

            this.setState({
                AllToSave : ids
            })
    }

    handleCheckBox = (id)=>{
        if(this.state.AllToSave.includes(id)) return true
        else return false
    }


    handleApply = (e)=>{
        let AppliableIds = this.state.AllToSave

        let newMenus = this.state.menus

        newMenus.forEach(menu=>{
            if(AppliableIds.includes(menu.id)){
                menu.offer_id = this.state.SelectedOffer_id
            }
        })

        this.setState({
            menus: newMenus,
            isApplying: false,
            SelectedOffer_id: "",
            AllToSave: []
        })

    }

    render() {

        const offer_options = (<select className="ApplyOffersDD" name="SelectedOffer_id" value = {this.state.SelectedOffer_id} onChange = {this.handleOfferSelection}>
            <option defaultValue value="">none</option>
            {this.state.offers.map((o,k)=>(
                <option key = {k} value = {o.offer_id}> {o.name} </option>
            ))}
        </select>)

        const menus = this.state.categories.map((c,key)=>(
            <div className = "MenusCategory" key = {key}>
                <div className="MenusCategoryTitle">
                    {c.name} 
                </div>
                <div className="MenusCards">
                {this.state.menus.map((m)=>(
                    m.category_id === c.category_id? (
                        
                        <div className="MenuCard" key= {m.id}>
                            { this.state.isEditing && !this.state.isApplying && <button className="DelMenuBtn" onClick={()=>(this.handleDeleteMenu(m.id))}>&#10008;</button>}
                            { this.state.SelectedOffer_id !== "" && <input type="checkbox" name="apply" className="offeraplBtn" onChange = {()=>(this.handleOfferonOne(m.id))} checked = {this.handleCheckBox(m.id)}/>}
                            <div className="MenuPhoto">
                                <img src={cake} alt="menu"/> {/*m.photo here*/}
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
                {this.state.SelectedOffer_id !== "" && <button className="MenuEditBtns" onClick = {this.handleApply} >  save </button>}
                <button className="MenuEditBtns" onClick={this.handleApplyOffer}> {this.state.isApplying? offer_options : "Apply"}</button>
                <button className="MenuEditBtns" onClick = {this.handleModelOpen}> Add Item </button>
                <button className="MenuEditBtns" onClick={()=>{this.handleToggle(); this.handleCancel(); this.handleSave(); this.props.isOpen()}}> Update </button>
            </div>
        )

        const UpdateMenus = (
            <div className="UpdateMenus">
                    <button className="MenuEditBtns" onClick = {()=>{this.handleToggle(); this.props.isOpen()}}> Update Items </button>  
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
