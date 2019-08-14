// pinta el pedido
import React, { Component } from "react";
import db from '../Services/FirestoreConfig';
class Chef extends Component {
  
state={ itemsCook: false }

componentDidMount(){
  

  }


  render(){
    const { itemsCook }=this.state
    return(
    <div className='grid'>
    { itemsCook && itemsCook !==undefined ? itemsCook.map((chef, keys)=>(
    <div className='text' keys={keys}>
      
    <button className="button2" onClick={this.addCook(chef)} >Mesero</button>
    <button className="button2" onClick={this.canceladoCocinero(chef)}>Cancelado</button>
    </div>
    ) ):null}
    </div>
    )}}

export default Chef ;