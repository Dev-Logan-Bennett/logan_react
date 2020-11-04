import React from 'react'
import "./store.scss"
import Cards from './Cards'
import ArrivalsCard from './ArrivalsCard'
import BestSellerCard from './BestSellerCard'
import Slides from './Slides'
import { HashLink as HLink } from 'react-router-hash-link';

export default function Store() {


  return (
<>
    <section className="slides-section">
      <Slides />
    </section>

    <div className="seperate-sections"></div>

    <section className="products-section">
    <h2  style={{"textAlign": "center", "paddingTop": "130px"}}>Our products</h2>
    <hr className="hr-custom"></hr>
    <h4 className="skin-care-heading">Skin Care</h4>
    <hr className="hr-custom"></hr>
  
    <h5 className="row">
       <HLink to='#TreatSkin' style={{"textDecoration": "none"}} className="listings col-lg-3 col-md-6 col-sm-12"><span>Soap Bars</span></HLink> 
       <HLink to='#NewArrivals' style={{"textDecoration": "none"}} className="listings col-lg-3 col-md-6 col-sm-12"><span>Body Scrubs</span></HLink> 
       <HLink to='#BestSellers' style={{"textDecoration": "none"}} className="listings col-lg-3 col-md-6 col-sm-12"><span>Best Sellers</span></HLink> 
       <HLink to='#Cleansers' style={{"textDecoration": "none"}} className="listings col-lg-3 col-md-6 col-sm-12"><span>Cleansers</span></HLink> 
    </h5>
    <hr className="hr-custom"></hr>
    <div className="container">
    <h2 id="BestSellers" style={{"textAlign": "center", "paddingTop": "10px"}}><u>Body Care</u></h2>
      <BestSellerCard />
      <h2  id="NewArrivals" style={{"textAlign": "center", "paddingTop": "10px"}}><u>Lip Care</u></h2>
      <ArrivalsCard/>
      <h2 id="TreatSkin" className="custom-underline" style={{"textAlign": "center", "paddingTop": "10px"}}><u>Soap Bars</u></h2>
      <Cards />
    </div>
    </section>
  </>
  )
}
