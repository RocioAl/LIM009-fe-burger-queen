import React, { Component } from 'react';
import db from '../Services/FirestoreConfig';

class Delivery extends Component {
  
  state= { orderItems:false}
  
  componentDidMount(){
    db.collection('waiter').get().then((snapshot )=> {
      this.setState({
        orderItems: snapshot.docs.map(doc => {
          return{ id:doc.id, cook:doc.data().chef, name:doc.data().chef.name , itemCooking:doc.data().chef.productOrder }
        })
      })
    })
  };
  
  addServido = chef => e => {
    e.preventDefault();
    db.settings({ timestampsInSnapshots: true });
      db.collection('delivered').add({
        chef
      });
      this.setState(state => {
        const orderItems = state.orderItems.filter(a => a.id !== chef.id);
        this.deleteOrder(chef.id)
        return { orderItems: orderItems };
      });
    }
    
    deleteOrder=(id)=>{
      db.collection('waiter').doc(id).delete();
    }
    
    render(){
      const {orderItems}=this.state
      return(
      <div className="grid">
      {orderItems && orderItems !==undefined ? orderItems.map((chef, key)=>(
      <div className="text" key={key}>
        <h1 className="neon" data-text="Listo!!!">Listo!!!</h1>
        <label>Cliente: {chef.name}</label><hr/>
        {chef.itemCooking.map(product => {
          return <p>{product.count} {product.data.item}</p>}
          )}
          <button className="button2" onClick={this.addServido(chef)}>Entregado</button>
          </div>
          ) ):null}
          </div>
          )}
        }
                  
export default Delivery;