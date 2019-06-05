import React, { Component } from 'react'
import FoodStyles from '../Categories/FoodStyles';
import './Inventory.css'
import Menus from '../Menus/Menus';

export default class Inventory extends Component {
    constructor(props){
        super(props);

        this.state = { 
            MenuEditing: false
        }
    }

    handleMenuEditing = (e)=>{
        this.setState({
            MenuEditing: !this.state.MenuEditing
        })
    } 

    render() {
        return (
            <div className="Inventory">
                {!this.state.MenuEditing && <FoodStyles />}
                <Menus isOpen = {this.handleMenuEditing}/>
            </div>
        )
    }
}
