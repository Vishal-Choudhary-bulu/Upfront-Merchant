import React, { Component } from 'react'
import './Requests.css'

export default class Requests extends Component {


    render() {

        const orders = this.props.requests.map((e,key)=>{

            const items = e.items.map((f,key1)=>(<div key={key1}>{f}</div>))

            const quantity = e.quantity.map((f,key1)=>(<div key={key1}>{f}</div>))

            return (
                <tr key={key} className='request-row'>
                    <td>{key+1}</td>
                    <td>#{e.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{e.time}</td>
                </tr>
            )
        })

        return (
            <div>
                <div className="requests-items-wrap">
                    <div>{orders.length} Requests</div>
                    <div className="requests-itemsbtn-wrap "><button className="requests-itemsbtn">Available Items</button></div>
                </div>
                <div>
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
            </div>
        )
    }
}
