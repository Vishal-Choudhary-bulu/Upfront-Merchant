import React, { Component } from 'react'
import './Requests.css'

export default class Requests extends Component {

    state = {
        requests : [
            {
                orderId:10000,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                time:'3:27 PM'
            },
            {
                orderId:10001,
                items:['Chicken biriyani' ,'Veg noodle','burger','pizza','dosa'],
                quantity:[2,5,3,3,4],
                time:'3:27 PM'
            },
            {
                orderId:10002,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                time:'3:27 PM'
            },
            {
                orderId:10003,
                items:['Chicken biriyani' ,'Veg noodle','Chicken noodles'],
                quantity:[2,5,1],
                time:'3:27 PM'
            },
            {
                orderId:10004,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                time:'3:27 PM'
            },
        ]
    }

    render() {

        const orders = this.state.requests.map((e,key)=>{

            const items = e.items.map((f)=>(<div>{f}</div>))

            const quantity = e.quantity.map((f)=>(<div>{f}</div>))

            return (
                <tr className='request-row'>
                    <td>{key+1}</td>
                    <td>{e.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{e.time}</td>
                </tr>
            )
        })

        return (
            <div>
                <div className="requests-items-wrap">
                    <div>53 Requests</div>
                    <div className="requests-itemsbtn-wrap "><button className="requests-itemsbtn">Available Items</button></div>
                </div>
                <table className='request-table'>
                    <tr className='request-header-row'>
                        <th>S.No</th>
                        <th>Order Id</th>
                        <th>Items</th>
                        <th>Quantity</th>
                        <th>Time</th>
                    </tr>
                    {orders}
                </table>
            </div>
        )
    }
}
