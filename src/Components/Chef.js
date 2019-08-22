// pinta el pedido
import React, { Component } from "react";
import db from '../Services/FirestoreConfig';
class Chef extends Component {

  state = { itemsCook: false }

  componentDidMount() {

    db.collection('chef').orderBy("date", "asc").get()
      .then((snapshot) => {
        this.setState({
          itemsCook: snapshot.docs.map(doc => {
            return { id: doc.id, productOrder: doc.data().cartItems, name: doc.data().client, date: doc.data().date, status: doc.data().status }
          })
        })
      })
  }

  addCook = chef => e => {
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('waiter').add({
      chef
    });
    this.setState(state => {
      const itemsCook = state.itemsCook.filter(a => a.id !== chef.id);
      this.deleteCocinero(chef.id)
      return { itemsCook: itemsCook };
    });
  }

  canceladoCocinero = order => e => {   //Funcion Cancelar Pedido
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    this.setState(state => {
      const itemsCook = state.itemsCook.filter(a => a.id !== order.id);
      this.deleteCocinero(order.id)
      return { itemsCook: itemsCook };
    });
  }

  deleteCocinero = (id) => {
    db.collection('chef').doc(id).delete();
  }
  render() {
    const { itemsCook } = this.state
    return (
      <div className='grid'>
        {itemsCook && itemsCook !== undefined ? itemsCook.map((chef, keys) => (
          <div className='text' keys={keys}>
            <label>Cliente: {chef.name}</label><hr />
            <label>Fecha: {chef.date}</label><hr />
            <label>Estado: {chef.status}</label><hr />
            {chef.productOrder.map(product => {
              return <p>{product.count} {product.data.item}</p>
            })
            }
            <button className="button2" onClick={this.addCook(chef)}>Mesero</button>
            <button className="button2" onClick={this.canceladoCocinero(chef)}>Cancelado</button>
          </div>
        )) : null}
      </div>
    )
  }
}

export default Chef;

