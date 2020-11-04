import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'

class ArrivalsCard extends Component {

      
  handleClick = (id)=>{
    this.props.addToCart(id); 
  }

  render(){
 
  let itemList = this.props.items.slice(0,4).map(item=>{
    return (

           <div className="card col-lg-3 container mt-4" key={item.id}>
                <div>
                <img className="card-body-top"  style={{"width": "18rem", height: "250px"}} src={item.img} alt={item.title} />
                    <div className="card-body">
                      {item.desc}
                      {item.price}
                    </div>
                </div>
                <span to="/shop" className="btn btn-primary btn-sm" onClick={()=>{this.handleClick(item.id)}}>Add</span>
          </div>

     )
    })   
    
    return(
    <div className="row">
      {itemList}
    </div>
  )
  }
}


const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArrivalsCard)

