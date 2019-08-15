import React, { Component } from 'react';
import util from '../Functions/util'

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {client: '' }
        this.state = {date: Date()}
        this.state = {status: 'Terminado' }
    }
      
render() {
const { cartItems } = this.props;

return (
<div id="menu">
    <div id="bre">
    {cartItems.length === 0 ? " No tiene pedidos" :
    <div></div>}
    {cartItems.length > 0 &&
    <div>
    {cartItems.map(item => (
    <p>
        <b>{item.data.item}</b> x {item.count} = {item.data.price * item.count}
        <br/><button className="button2" onClick={(e) => this.props.handleAddTo(e, item)}>-</button>
        <button className="button2" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>x</button>
        </p>))
    }
    <b>Total: {util.formatCurrency(cartItems.reduce((a, c) => (a+ c.data.price* c.count ), 0))}
    </b>
    </div>
}
</div>
</div>
)
}}