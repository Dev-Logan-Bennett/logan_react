import React, { Component, Children } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity, clearCart} from '../actions/cartActions'
import Recipe from './Recipe'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    //to substruct from the quantity
    clearCart = (id)=>{
            this.props.removeItem(id);
    }
    //to substruct from the quantity
    removeItem = (id)=>{
        this.props.removeItem(id);
    }
    render(){
        console.log(this.props)
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li key={item.id}>
                                    <div className="row"> 
                                        <img src={item.img} style={{"maxHeight": "300px", "maxWidth": "300px"}} className="col col-lg-4" alt={item.img}/>
                                        <b><span style={{"fontSize": "18px",  "position": "relative", "top": "100px"}} className='col-lg-4'>{item.title}:</span></b>
                                        <p style={{"fontSize": "18px",  "position": "relative", "top": "100px"}} >{item.desc}</p>
                                    </div>

                                    <div>
                                    <p className="col-lg-4"><b>Price: {item.price}$</b></p> 
                                        <p>    
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div>
                                            <Link to="/cart"><i class="fa fa-arrow-up fa-3x"  aria-hidden="true" onClick={()=>{this.handleAddQuantity(item.id)}}></i></Link>
                                            <Link to="/cart"><i class="fa fa-arrow-down fa-3x" aria-hidden="true" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i></Link>
                                        </div>
                                        <button className="btn btn-danger" onClick={()=>{this.removeItem(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container" style={{"textAlign": "center"}}>
                <div className="cart">
                    <h3>You have ordered:</h3>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                {
                    {addedItems}.addedItems.length > 0 ? 
                    <button
                    onClick={() => this.props.clearCart({addedItems}.addedItems)}
                    >Clear Cart</button>
                    : null
                }
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        clearCart: (id)=>{dispatch(clearCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)