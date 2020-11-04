import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
import StripeCheckout from 'react-stripe-checkout'
import Purchase from './purchaseButton'
import { clearCart } from '../actions/cartActions'

class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

     //to substruct from the quantity
     clearCart = (id)=>{
        this.props.removeItem(id);
    }

    render(){
        console.log(this.props)
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span> Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <Purchase
                         onClick={() => this.props.clearCart(this.props.addedItems)}
                    />
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        clearCart: (id)=>{dispatch(clearCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
