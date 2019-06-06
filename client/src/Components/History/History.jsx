import React, { Component } from 'react'
import './History.css'

export default class History extends Component {

    orders = this.props.requests.filter((f)=>(f.completed)).map((e,key)=>{

        return (
            <div className='request-box' key={key}>
                <div className='history-box-key'>{key+1}</div>
                <div className='history-inner-box'>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>Order ID</div>
                        <div className='history-bold-text'>#{e.orderId}</div>
                    </div>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>User name</div>
                        <div className='history-bold-text'>Diwaker</div>
                    </div>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>Amount</div>
                        <div className='history-bold-text'>{e.amount}</div>
                    </div>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>Order time</div>
                        <div className='history-bold-text'>{e.timeOrder}</div>
                    </div>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>Completion time</div>
                        <div className='history-bold-text'>{e.timePick}</div>
                    </div>
                    <div className='history-box-item'>
                        <div className='history-normal-text'>Status</div>
                        <div className='history-bold-text'>{e.status}</div>
                    </div>
                </div>
            </div>
        )
    })

    render() {
        return (
            <div className='history-container'>
                {this.orders}
            </div>
        )
    }
}
