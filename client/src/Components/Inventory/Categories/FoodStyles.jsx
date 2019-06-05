import React, { Component } from 'react'
import './FoodStyles.css'
import EditorModel from '../EditorModel/EditorModel';

export default class FoodStyles extends Component {

    constructor(props){

        super(props);

        this.state = {
            ModelIsOpen : false,
            SelectedItem : "",
            FoodStyles : [
                {
                    id: 1,
                    name : "Starters"
                },
                {
                    id: 2,
                    name : "North Indian"
                },
                {
                    id: 3,
                    name : "South Indian"
                },
                {
                    id: 4,
                    name : "Chienese"
                },
                {
                    id: 5,
                    name : "Western"
                }

            ] 
        }
    }

    handleEdit = (key)=>{

        this.setState({
            ModelIsOpen: true
        })

        let item = this.state.FoodStyles.filter((item)=>{
            if(item.id === key){
                return true
            }else{
                return false
            }
        })

        this.setState({
            SelectedItem: item[0]
        })
       }

       handleCreation = (e) => {
           this.setState({
               ModelIsOpen: true
           })

           let item = {
               name : "",
               id: "9"
           }

           this.setState({
               SelectedItem: item
           })
       }

       UpdateCategory = (data)=>{
            
        if(data.name !== ""){
            let newObj = data;

            let item = this.state.FoodStyles.filter((item)=>{
                if(item.id !== newObj.id){
                    return true
                }else{
                    return false
                }
            })

            item.push(newObj);

            this.setState({
                FoodStyles : item,
                ModelIsOpen:false
            })
        }
        else{
            alert("please enter a name for the new category");
        }
       }

       DeleteCategory = (data)=>{
            let newObj = data;

            let item = this.state.FoodStyles.filter((item)=>{
                if(item.id !== newObj.id){
                    return true
                }else{
                    return false
                }
            })
            this.setState({
                FoodStyles : item,
                ModelIsOpen:false
            })

       }

       CreateCategory = (data)=>{
            let newObj = data;
            let item = this.state.FoodStyles;
            item.push(newObj);

            this.setState({
                FoodStyles : item,
                ModelIsOpen:false
            })

       }

    render() {

        const Styles = this.state.FoodStyles.map((s,key)=>(
            <div className="foodCategory" key = {key}>
                <p className="foodCategoryName"> {s.name}</p>
                <button className="foodCategoryEditIcon" onClick={()=>(this.handleEdit(s.id))}> 
                    {/* icon here */}
                    <i className="fas fa-edit"></i>
                </button>
            </div>
        ))

        const Model = this.state.ModelIsOpen ? (<EditorModel item = {this.state.SelectedItem} Update = {this.UpdateCategory} Delete = {this.DeleteCategory} Create = {this.CreateCategory}/>): (<div></div>)

        return (

            <div className="FoodStyles">
                <div className="FoodStylesTitle">
                    Food Style
                </div>
                {Styles}

                <div className="AddCategoryButton">
                   <button onClick = {this.handleCreation}> + Add Category </button>
                </div>

                <button className="toOrdersRouteBtn">Back to orders</button>
                
                {Model}
               
            </div>
        )
    }
}
