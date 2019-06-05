import React, { Component } from 'react'
import  './EditorModel.css'

export default class EditorModel extends Component {

    constructor(props){
        super(props);
    
        this.state = {
                id: "",
                name: ""
        }
    }

    componentDidMount = ()=>{
        this.setState({
            id: this.props.item.id,
            name: this.props.item.name
        })
    }

    handleChanage = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const Model = (<div className="Model">
                        <label htmlFor="name">Category Name</label>
                            <input name="name" type="text" value= { this.state.name} onChange = {this.handleChanage} autoComplete="off"/>

                            <button onClick = {()=>(this.props.Update(this.state))} >Update</button>
                            <button onClick= {(()=>this.props.Delete(this.state))}> Delete </button>

                        </div>
                        )    
        return (
            <div className="BlurBg">
                <div className="EditorModel">
                     {Model}
                </div>
            </div>
        )
    }
}
