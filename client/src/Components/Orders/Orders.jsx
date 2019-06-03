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

        requests : [
            {
                orderId:10000,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'cash',
                paid:false,
                timeOrder:'3:27 PM',
                completed:true,
                status:'Being prepared',
                timePick:'4:01 PM'
            },
            {
                orderId:10001,
                items:['Chicken biriyani' ,'Veg noodle','burger','pizza','dosa'],
                quantity:[2,5,3,3,4],
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                status:'Ready',
                completed:false,
            },
            {
                orderId:10002,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'online',
                paid:true,
                time:'3:27 PM',
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                status:'Ready',
                completed:false,
            },
            {
                orderId:10003,
                items:['Chicken biriyani' ,'Veg noodle','Chicken noodles'],
                quantity:[2,5,1],
                amount:500.00,
                payment:'online',
                paid:true,
                timeOrder:'3:27 PM',
                completed:true,
                status:'Being prepared',
                timepick:'4:01 PM'
            },
            {
                orderId:10004,
                items:['Chicken biriyani' ,'Veg noodle'],
                quantity:[2,5],
                amount:500.00,
                payment:'cash',
                paid:false,
                timeOrder:'3:27 PM',
                status:'Being prepared',
                completed:false,
            },
        ]
    }

    updateActive = (e) => {
        this.setState({
            activeTab:e,
            sidebarOpn : !this.state.sidebarOpn
        })
    }

    render() {

        const processing = this.state.requests.filter((e)=>(!e.completed)).map((f,key)=>{

            const items = f.items.map((g,key1)=>(<div key={key1}>{g}</div>))

            const quantity = f.quantity.map((g,key1)=>(<div key={key1}>{g}</div>))

            return (
                <tr key={key}>
                    <td>{f.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{f.amount}</td>
                    <td>{f.payment}</td>
                    <td>{f.timeOrder}</td>
                </tr>
            )
        })


        const completed = this.state.requests.filter((e)=>(e.completed)).map((f,key)=>{

            const items = f.items.map((g,key1)=>(<div key={key1}>{g}</div>))

            const quantity = f.quantity.map((g,key1)=>(<div key={key1}>{g}</div>))

            return (
                <tr key={key}>
                    <td>{f.orderId}</td>
                    <td>{items}</td>
                    <td>{quantity}</td>
                    <td>{f.amount}</td>
                    <td>{f.payment}</td>
                    <td>{f.timeOrder}</td>
                </tr>
            )
        })

        const all = this.state.requests.map((e,key)=>{

            const item = e.items.length<=2 ? e.items.join(', '): (e.items.slice(0,2).join(', ') +' +'+ (e.items.length-2))

            return (
                <tr key={key}>
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
            <table>
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
            <table>
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
            <table>
                <tr>
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
