import React, { Component } from 'react'
import './MenuModel.css'

export default class MenuModel extends Component {

    constructor(props){
        super(props);

        this.state = { 
            name: "",
            category: "",
            is_veg: true,
            price: "",
            offer: "",
            photo: ""
        }
    }

    handleChanage = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const Model = (
            <div className="EModel">
                <label htmlFor="name">Name</label>
                <input name="name" type="text" value= { this.state.name} onChange = {this.handleChanage} className = "Model-name"/>

                <label htmlFor="category">Category</label>
                <input name="category" type="text" value= { this.state.category} onChange = {this.handleChanage} className = "Model-category"/>

                <label htmlFor="price">price</label>
                <input name="price" type="text" value= { this.state.price} onChange = {this.handleChanage} className = "Model-price"/>

                <label htmlFor="offer">offer</label>
                <input name="offer" type="text" value= { this.state.offer} onChange = {this.handleChanage} className="Model-offer"/>

                <label htmlFor="is_veg">Vegetarian</label>
                <input name="is_veg" type="checkbox" value= { this.state.is_veg} onChange = {this.handleChanage} className = "Model-isveg"/>

                <label htmlFor="photo">Photo</label>
                <input name="photo" type="file" accept="jpg" value= { this.state.photo} onChange = {this.handleChanage} className="Model-photo"/>

                
                <button onClick = {()=>(this.props.Update(this.state))} className="ModelBtn">Update</button>
                <button onClick= {(()=>this.props.Cancel(this.state))} className="ModelBtn"> Delete </button>
            </div>
        )

        return (
            <div className="MenuModel">
                {Model}
            </div>
        )
    }
}
