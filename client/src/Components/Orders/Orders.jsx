import React, { Component } from 'react'
import './Orders.css'


const style1 = {
    justifyContent:'center'
}

const style2 = {
    justifyContent:'flex-end'
}

export default class Orders extends Component {

    state = {
        activeTab:1,

    }

    updateActive = (e) => {
        this.setState({
            activeTab:e,
            sidebarOpn : !this.state.sidebarOpn
        })
    }

    render() {

        const processing = this.props.requests.filter((e)=>(!e.completed)).map((f,key)=>{

            const items = f.items.map((g,key1)=>(<div key={key1}>{g}</div>))

            const quantity = f.quantity.map((g,key1)=>(<div key={key1}>{g}</div>))

            return (
                <tr key={key} className ='processing-table-row'>
                    <td>{f.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{f.amount}</td>
                    <td>{f.payment}</td>
                    <td>{f.timeOrder}</td>
                </tr>
            )
        })


        const completed = this.props.requests.filter((e)=>(e.completed)).map((f,key)=>{

            const items = f.items.map((g,key1)=>(<div key={key1}>{g}</div>))

            const quantity = f.quantity.map((g,key1)=>(<div key={key1}>{g}</div>))

            return (
                <tr key={key} className ='completed-table-row'>
                    <td>{f.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{f.amount}</td>
                    <td>{f.payment}</td>
                    <td>{f.timeOrder}</td>
                </tr>
            )
        })

        const all = this.props.requests.map((e,key)=>{

            const item = e.items.length<=2 ? e.items.join(', '): (e.items.slice(0,2).join(', ') +' +'+ (e.items.length-2))

            return (
                <tr key={key} className='all-table-row'>
                    <td>#{e.orderId}</td>
                    <td>{item}</td>
                    <td>{e.status}</td>
                    <td>{e.amount}</td>
                    <td>{e.payment}</td>
                    <td>{e.timeOrder}</td>
                </tr>
            )
        })

        const allTable = (
            <table className='all-table'>
                <tr>
                    <th>Order Id</th>
                    <th>Items</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Time</th>
                </tr>
                <tbody>{all}</tbody>            
            </table>
        )

        const processingTable = (
            <table className='processing-table'>
                <tr>
                    <th>Order Id</th>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Time</th>
                </tr>
                <tbody>{processing}</tbody>
            </table>
        )

        const completedTable = (
            <table className='completed-table'>
                <tr >
                    <th>Order Id</th>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Time</th>
                </tr>
                <tbody>{completed}</tbody>
            </table>
        )

        return (
            <div>
                <div>
                    <ul className='orders-typelist'>
                        <li><button onClick={()=>this.updateActive(1)}>All</button></li>
                        <li><button onClick={()=>this.updateActive(2)}>Processing</button></li>
                        <li><button onClick={()=>this.updateActive(3)}>Completed</button></li>
                    </ul>
                </div>
                <div className='orders-graybar' style={this.state.activeTab===2?style1:(this.state.activeTab!==1?style2:{})}>
                    {(this.state.activeTab===1) && (<div className="orders-orangebar"></div>)}
                    {(this.state.activeTab===2) && (<div className="orders-orangebar"></div>)}
                    {(this.state.activeTab===3) && (<div className="orders-orangebar"></div>)}
                </div>
                { (this.state.activeTab===1) && allTable }
                { (this.state.activeTab===2) && processingTable }
                { (this.state.activeTab===3) && completedTable }
            </div>
        )
    }
}
