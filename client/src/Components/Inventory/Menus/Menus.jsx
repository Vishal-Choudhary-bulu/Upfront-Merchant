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
            SelectedOffer_id: "",
            ApplyToAll: false,
            AllToSave: [],
            CategoriesToSave: [],
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
        else{
            alert("please fill all the details related to the new item")
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

    handleOfferSelection = (e) =>{
            this.setState({
                SelectedOffer_id : e.target.value
            })
    }

    handleApplyAll = (cid) =>{
        
        let dishes = this.state.menus

        let ids = this.state.AllToSave
        
        let newCatTosave = this.state.CategoriesToSave
        dishes.forEach(dish => {
            if(!newCatTosave.includes(cid))
                if(dish.category_id === cid){
                    if(!ids.includes(dish.id))ids.push(dish.id) 
                }
            else{
                let rems = dishes.filter(dish=>(dish.category_id !== cid))
                ids = []
                rems.forEach(dish=>(
                    ids.push(dish.id)
                ))
            }
        });
         newCatTosave.push(cid);

        
        this.setState({
            ApplyToAll: !this.state.ApplyToAll,
            CategoriesToSave: newCatTosave,
            AllToSave : ids
        })
    }

    handleOfferonOne = (id) =>{
        let ids = this.state.AllToSave

        if(this.state.ApplyToAll){
            ids = ids.filter(i=>(i !==id))
            this.setState({
                ApplyToAll : false,
                AllToSave: ids
            })
        }else{
                
            if(!ids.includes(id))ids.push(id)
            else{
                ids = ids.filter(i=>(i !==id))
            }

            this.setState({
                AllToSave : ids
            })
        }
    }

    handleCheckBox = (id)=>{
        if(this.state.AllToSave.includes(id)) return true
        else return false
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
                    {c.name} {this.state.SelectedOffer_id !== "" && <input type="checkbox" name="applyAll" className="offeraplBox" 
                    onChange={(()=>(this.handleApplyAll(c.category_id)))} checked = {this.state.ApplyToAll}/>}
                </div>
                <div className="MenusCards">
                {this.state.menus.map((m)=>(
                    m.category_id === c.category_id? (
                        <div className="MenuCard" key= {m.id}>
                            { this.state.isEditing && <button className="DelMenuBtn" onClick={()=>(this.handleDeleteMenu(m.id))}>&#10008;</button>}
                            <div className="MenuPhoto">
                                <img src={menuImg} alt="menu"/>
                                { this.state.SelectedOffer_id !== "" && <input type="checkbox" name="apply" className="offeraplBtn" onChange = {()=>(this.handleOfferonOne(m.id))} checked = {this.handleCheckBox(m.id)}/>}
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
