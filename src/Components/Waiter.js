import React, {Component} from 'react'
import { getBreakfast, getLunch, getHamburger1, getExtra1, getExtra2, getHamburger2 } from '../Services/Firestore.js'
import db from '../Services/FirestoreConfig';
import util from '../Functions/util';
import Order from './Order';

export default class Waiter extends Component{
      
constructor() {
  super();
    this.state = { items1:[], items2:[], items3:[], items4:[], huevo:[], queso:[], cartItems:[], checked: false, checkeda: false, checkedas: false, opciones: false, client: '', date: Date(), status: 'Pendiente' };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.handleAddTo=this.handleAddTo.bind(this);
}
            
componentDidMount(){
    
db.collection('breakfast').get().then((snapShots)=>{
  this.setState({
    items1:snapShots.docs.map(doc=>{
    return{id:doc.id,data:doc.data()}
}) })});

db.collection('lunch').get().then((snapShots)=>{
  this.setState({
  items2:snapShots.docs.map(doc=>{
    return{id:doc.id,data:doc.data()}
    }) })});
    
    db.collection('hamburger1').get().then((snapShots)=>{
      this.setState({
      items3:snapShots.docs.map(doc=>{
        return{id:doc.id,data:doc.data()}
        }) })});
        
        db.collection('hamburdoble').get().then((snapShots)=>{
          this.setState({
            items4:snapShots.docs.map(doc=>{
              return{id:doc.id,data:doc.data()}
            }) })});
            
            db.collection('extra1').get().then((snapShots)=>{
              this.setState({
                huevo:snapShots.docs.map(doc=>{
                  return{id:doc.id,data:doc.data()}
                }) })});
                
                db.collection('extra2').get().then((snapShots)=>{
                  this.setState({
                    queso:snapShots.docs.map(doc=>{
                      return{id:doc.id,data:doc.data()}
                    }) })});
                  }

handleAddToCart = (e, product) => {
        this.setState(state => {
          const cartItems = state.cartItems;
          let productAlreadyInCart = false;
          cartItems.forEach(cp => {
            if (cp.id === product.id) {
              cp.count += 1;
              productAlreadyInCart = true;
            }
          });
          if (!productAlreadyInCart) {
            cartItems.push({ ...product, count: 1 });
          }
          return { cartItems: cartItems };
        });
      }
      
handleRemoveFromCart = (e, product) => {
  this.setState(state => {
    const cartItems = state.cartItems.filter(a => a.id !== product.id);
    return { cartItems: cartItems };
    })
}

handleAddTo = (e, product) => {
  this.setState(state => {
    const cartItems = state.cartItems;
    let productAlreadyInCart = false;
    cartItems.forEach(cp => {
      if (cp.id === product.id) {
        cp.count --;
        productAlreadyInCart = true;
      }
    })
    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    return { cartItems: cartItems };
  })
}
    
handleChange(checked) {
  this.setState({ checked });
}
handleChang(checkeda) {
  this.setState({ checkeda });
}
handleChangs(checkedas) {
  this.setState({ checkedas });
}
handleOpciones(opciones) {
  this.setState({ opciones });
}

updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

addUser = e => {
  e.preventDefault();
  const data = this.state
  db.settings({
    timestampsInSnapshots: true
  });
  db.collection('chef').add({
      cartItems: this.state.cartItems,
      client: this.state.client,
      date: this.state.date,
      status: this.state.status,
  });  
  this.setState({
      cartItems: [],
      client: 'Name',
      date: Date(),
      status: 'Pendiente',
  });
  return(data)
};

handleInputChange = (event) => {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value
 })
}

render(){
  
  const {items1}=this.state
  const {items2}=this.state
  const {items3}=this.state
  const {items4}=this.state
  const {huevo}=this.state
  const {queso}=this.state
  
  return(
  <div id="menu">
    <div id="lun">
      <p><button type="button" className="button1" onClick={() => this.handleChang(false)}>Desayuno</button>
      <button type="button" className="button1" onClick={() => this.handleChang(true)}>Almuerzo y Cena</button></p>
      <div id="container">
        <div id="right-column">
          <form onSubmit={this.addUser}>
            <div> {this.state.client} Tienes {this.state.cartItems.length} pedido(s). <hr /></div>
            <p><input type='text' className='inputClient' placeholder="Cliente" value={this.state.client} name='client'onChange={this.handleInputChange}></input></p>
            <p><button type="submit" className='button2'>Enviar</button></p>
            {this.state.cartItems}
            </form>
            <Order cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} handleAddTo={this.handleAddTo}/>
            </div>
            <div id="left-column">
            {this.state.checkeda ? (
              [<p>{items2 && items2 !==undefined ? items2.map((item, key)=>(
              <div className="row">
                <div className="column">
                  <div className="card">
                    <div key={key}>
                      <img className="cardImg" src={item.data.img} alt="Almuerzo"/> 
                      <div className="title">
                        <div onClick={()=>getLunch(item.data.item)}>{item.data.item}</div>
                        <div>{util.formatCurrency(item.data.price)}</div>
                      <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                    </div> 
                  </div> 
                </div>   
              </div> 
              </div>
          ) ):null}</p>,
          <p>
            <p><button className="button1" onClick={(e) => this.handleChange(true)}>Hamburguesa Simple</button></p>
            <div id="left-column">
            {items3 && items3 !==undefined ? items3.map((item ,key)=>(
            <div className="row">
            <div className="column">
              <div className="card">
                  {this.state.checked ? (
                  <div key={key}>
                    <img className="cardImg" src={item.data.img} alt="Almuerzo"/>
                    <div className="title">
                    <div onClick={()=>getHamburger1(item.data.item)}>{item.data.item} </div>
                    <div>{util.formatCurrency(item.data.price)}</div>
                    <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button><hr/>
                    </div>
                      <button className="button" onClick={() => this.handleOpciones(true)}>Opciones</button>
                      {this.state.opciones? (
                      <div div className="card">
                      {huevo && huevo !==undefined ? huevo.map((item ,key)=>(
                      <div key={key}>
                        <img className="cardImg" src={item.data.img} alt="almuerzo"/>
                        <div className="display" onClick={()=>getExtra1(item.data.item)}>{item.data.item}</div>
                        <div className="display">{util.formatCurrency(item.data.price)}</div>
                        <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                        </div>
                        ) ):null}
                        {queso && queso !==undefined ? queso.map((item ,key)=>(
                        <div key={key}>
                          <img className="cardImg" src={item.data.img} alt="almuerzo"/>
                          <div className="display" onClick={()=>getExtra2(item.data.item)}id="almuerzo">{item.data.item} </div>
                          <div className="display">{util.formatCurrency(item.data.price)}</div>
                          <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                          </div>
                          ) ):null}
                          </div>
                          ) : (
                          <div/>
                          )}
                          </div>
                          ) :null}
                          </div>
                          </div>
                          </div>
                          ) ):null}
                          </div>
                          <button className="button1" onClick={(e) => this.handleChangs(true)}>Hamburguesa Doble</button>
                          <div id="left-column">
                          {items4 && items4 !==undefined ? items4.map((item ,key)=>(
                          <div className="row">
                            <div className="column">
                              <div className="card">
                              {this.state.checkedas ? (
                              <div key={key}>
                                <img className="cardImg" src={item.data.img} alt="almuerzo"/>
                                <div className="title">
                                <div onClick={()=>getHamburger2(item.data.item)} id="almuerzo">{item.data.item}</div>
                                <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button><hr/>
                                </div>
                                  <button className="button" onClick={() => this.handleOpciones(true)}>Opciones</button>
                                  {this.state.opciones? (
                                  <div>
                                  {huevo && huevo !==undefined ? huevo.map((item ,key)=>(
                                  <div key={key}>
                                    <img className="cardImg" src={item.data.img} alt="almuerzo"/>
                                    <div className="display" onClick={()=>getExtra1(item.data.item)}id="almuerzo">{item.data.item}</div>
                                    <div className="display">{util.formatCurrency(item.data.price)}</div>
                                    <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                                    </div>
                                    ) ):null}
                                    {queso && queso !==undefined ? queso.map((item ,key)=>(
                                    <div key={key}>
                                      <img className="cardImg" src={item.data.img} alt="almuerzo"/>
                                      <div className="display" onClick={()=>getExtra2(item.data.item)}id="almuerzo">{item.data.item}</div>
                                      <div className="display">{util.formatCurrency(item.data.price)}</div>
                                      <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                                      </div>
                                      ) ):null}
                                      </div>
                                      ) : (
                                      <div/>
                                      )}
                                      </div>
                                      ) :null}
                                      </div>
                                      </div>
                                      </div>
                                      ) ):null}
                                      </div>
                                      </p>,
                                      <p>
                                      </p>
                                      ]
                                      ) : (
                                      <p>
                                      {items1 && items1 !==undefined ? items1.map((item ,key)=>(
                                      <div className="row">
                                        <div className="column">
                                          <div className="card">
                                            <div key={key}>
                                              <img className="cardImg" src={item.data.img} alt="Desayuno"/>
                                              <div className="title">
                                                <div onClick={()=>getBreakfast(item.data.item)}>{item.data.item}</div>
                                                <div className="display">{util.formatCurrency(item.data.price)}</div>
                                                <button className="button" onClick={(e)=>this.handleAddToCart(e, item)}>{item.data.item} ${item.data.price}</button>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                ) ):null}</p>
                                                )}
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                )
                                              }
                                            }