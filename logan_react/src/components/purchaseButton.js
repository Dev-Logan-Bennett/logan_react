import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import { clearCart} from '../actions/cartActions'

class Purchase extends React.Component {
  onToken = (token) => {
    fetch('/payment', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
   
  // ...
  render() {
    console.log(this.props.addedItems)
    return (
      // ...
      <StripeCheckout
        amount={this.props.total * 100}
        token={this.onToken}
        stripeKey="pk_test_UuBdgfcyxHvDMza0E6OMBij600EpKPjFtS"
        currency="USD"
        name="Bennett Body Care" // the pop-in header title
        description="Beauty Products" // the pop-in header subtitle
        shippingAddress
      />
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
      clearCart: (id)=>{dispatch(clearCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchase)