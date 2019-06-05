import React, { Component } from 'react'
import './MenuModel.css'

export default class MenuModel extends Component {

    constructor(props){
        super(props);

        this.state = { 
            name: "",
            category_id: "",
            is_veg: true,
            price: "",
            offer_id: "",
            photo: "",
        }
    }

    handleChanage = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClear = (e) =>{
        this.setState({
            name: "",
            category_id: "",
            is_veg: true,
            price: "",
            offer_id: "",
            photo: ""
        })
    }

    handleVegToggle = (e)=>{
        this.setState({
            is_veg: !this.state.is_veg
        })
    }

    render() {

        const category_options = (<select name="category_id" value = {this.state.category_id} onChange = {this.handleChanage}>
            <option defaultValue>select</option>
            {this.props.categories.map((c,k)=>(
                <option key = {k} value = {c.category_id}>{c.name}</option>
            ))}
        </select>)

        const offer_options = (<select name="offer_id" value = {this.state.offer_id} onChange = {this.handleChanage}>
            <option defaultValue>select</option>
            {this.props.offers.map((o,k)=>(
                <option key = {k} value = {o.offer_id}>{o.name}</option>
            ))}
        </select>)


        const Model = (
            <div className="EModel">
                <div className="ModelInputs">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" value= { this.state.name} onChange = {this.handleChanage} className = "Model-name" autoComplete = "off" />
                </div>

                <div className="ModelInputs">
                    <label htmlFor="category_id">Category</label>
                    {category_options}
                </div>

                <div className="ModelInputs">
                    <label htmlFor="price">price</label>
                    <input name="price" type="text" value= { this.state.price} onChange = {this.handleChanage} className = "Model-price"
                    autoComplete = "off"/>
                </div>

                <div className="ModelInputs">
                    <label htmlFor="offer_id">offer</label>
                    {offer_options}
                </div>

                <div className="ModelInputs">
                    <label htmlFor="is_veg">Veg</label>
                    <button onClick={this.handleVegToggle} className="vegbtn" >{this.state.is_veg? ("YES") : ("NO")}</button>
                </div>

                <div className="ModelInputs">
                    <label htmlFor="photo">Photo</label>
                    <input name="photo" type="file" accept="image/*" value= { this.state.photo} onChange = {this.handleChanage} className="Model-photo"/>
                </div>

                <div className="MenuModelButtons">
                    <button onClick = {()=>(this.props.Update(this.state))} className="ModelBtn">Update</button>
                    <button onClick= {()=>{this.props.Cancel(); this.handleClear()}} className="ModelBtn"> Delete </button>
                </div>
            </div>
        )

        return (
            <div className="MenuModel">
                {Model}
            </div>
        )
    }
}
