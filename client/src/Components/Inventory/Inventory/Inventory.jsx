import React from 'react';
import FoodStyles from '../Categories/FoodStyles';
import './Inventory.css'
import Menus from '../Menus/Menus';

const Inventory = ()=>{
    return(
        <div className="Inventory">
            <FoodStyles/>
            <Menus/>
        </div>
    )
}

export default Inventory;