import React, { Component } from 'react'
import './Menus.css'
import menuImg from "./../../../Assets/Mask Group 3.png"
export default class Menus extends Component {
    constructor(props){
        super(props);

        this.state = { 
            categories: [
                {
                    name: "Fast Food",
                    category_id: "1AL12",
                    res_id: "FIRST"
                }
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
                    name: "burger",
                    price: 90,
                    category_id: "1AL12",
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
                                <div className="MenuPrice"> {m.price* 80 / 100}</div>
                            </div>
                        </div>
                    ): (null)
                ))
                }
                </div>
            </div>
        ))

        return (
            <div className="Menus">
                {menus}
            </div>
        )
    }
}
