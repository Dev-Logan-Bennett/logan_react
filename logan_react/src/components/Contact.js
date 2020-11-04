import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring';
import { TimelineLite, Power3 } from 'gsap';
import { HashLink as HLink } from 'react-router-hash-link';

import "./contact.scss"
import brooke1 from './images/brooke1.JPG';
import brooke2 from './images/brooke2.JPG';
import brooke3 from './images/brooke3.JPG';

export default function Contact (){
  const prop = useSpring({config: {friction: 300 } , opacity: 1, from: {opacity: 0}});

  let images = useRef(null);
  let tl = new TimelineLite({ delay: .8});

  useEffect(()=>{
    const imageA = images.children[0];
    const imageB = imageA.nextSibling;
    const imageC = imageB.nextSibling;

    tl.from(imageA, .8, {y: -1280, ease: Power3.easeOut},'Start')
    .from(imageA.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(imageB, 1.0, {y: -1280, ease: Power3.easeOut}, .2)
    .from(imageB.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(imageC, .8, {y: -1280, ease: Power3.easeOut}, .2)
    .from(imageC.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, .2)

  }, [tl]);

  return ( 
    <>
    <main className="contact-us-page">
      <animated.div style={prop}>
          <div ref={el => images = el} className="row brooks-parent">
            <div className="brooke1">
              <img alt="brooke1" className="bg-img w-100" src={brooke1}/>
            </div>
            <div className="brooke2">
              <img alt="brooke2" className="bg-img w-100" src={brooke2}/>
            </div>
            <div className="brooke3">
              <img alt="brooke3" className="bg-img w-100" src={brooke3}/>
            </div>
          </div>
      </animated.div>
      <section className="contact-us-links mb-5 mt-5">
        <div className="row">
            <div className="contact-us-links-div col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
              <HLink to="#question"><i className="contact-icons fa fa-question-circle fa-4x" aria-hidden="true"></i></HLink>
              <h2>FAQ</h2>
              <p>Click the icon for FAQ</p>
            </div>

            <div className="contact-us-links-div col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <HLink to='#warranty'><i className="contact-icons fa fa-times fa-4x" aria-hidden="true"></i></HLink>
              <h2>Warranty</h2>
              <p>Click the icon for Warranty</p>
            </div>
            <div className="contact-us-links-div col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <HLink to='#shipping'><i className="contact-icons fa fa-truck fa-4x" aria-hidden="true" ></i></HLink>
              <h2>Shipping</h2>
              <p>Click the icon for shipping</p>
            </div>
            <div className="contact-us-links-div col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <HLink to='#gift'><i className="contact-icons fa fa-gift fa-4x" aria-hidden="true"></i></HLink>
            <div>
            <h2>Gift Cards</h2>
                <p>Click the icon for gift cards</p>
            </div>
            </div>
        </div>
      </section>
        <hr className="custom-contact-hr"></hr>
      <section className="mb-5 mt-5">
          <div style={{"paddingTop": "40px"}}>
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Isn't What You're Looking For?</h2>
                <h4 style={{"paddingTop": "30px", "paddingBottom": "40px"}}>
                Send Us An Email at <b>bennettbodycare@gmail.com</b></h4>
              </div>
            </div>
          </div>
      </section>
        <hr className="custom-contact-hr"></hr>
      <section className="mb-5 mt-5">
          <div className="row contact-details">
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center">
                <h4>CEO and Founder</h4>
                <p>267-566-3976</p>
                <p>Monday-Friday</p>
                <p>10:00AM – 2:00PM ET</p>
                <p>Email Us</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center">
                <h4>Photographer</h4>
                <p>267-566-1443</p>
                <p>Monday-Wednesday</p>
                <p>10:00AM - 4:00PM</p>
                <p>jeanineabennett@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center">
                <h4>Website Developer</h4>
                <p>267-566-1683</p>
                <p>Monday-Thursday</p>
                <p>10:00AM - 5:00PM</p>
                <p>bennett.j.logan@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 align-items-center">
              <h4>Contact us</h4>
                <div className="contact-us-socials-div">
                  <i className="contact-us-socials-icon fa fa-instagram fa-2x" aria-hidden="true"></i>
                  <i className="contact-us-socials-icon fa fa-twitter fa-2x" aria-hidden="true"></i>
                </div>
            </div>
          </div>
      </section>
        <hr className="custom-contact-hr"></hr>
      <section className="accordion-section clearfix mt-3" aria-label="Question Accordions">
          <h2 id="question" className="mb-4 mt-4 text-center">Frequently Asked Questions </h2>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
            <h3 className="panel-title">
              <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
              What is in our products?
              </a>
            </h3>
            </div>
            <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
            <div className="panel-body px-3 mb-4">
              <p>With Solodev CMS, you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with:</p>
              <ul>
              <li>Light speed deployment on the most secure and stable cloud infrastructure available on the market.</li>
              <li>Scalability – pay for what you need today and add-on options as you grow.</li>
              <li>All of the bells and whistles of other enterprise CMS options but without the design limitations - this CMS simply lets you realize your creative visions.</li>
              <li>Amazing support backed by a team of Solodev pros – here when you need them.</li>
              </ul>
            </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
            <h3 className="panel-title">
              <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
              Why bennettbodycare?
              </a>
            </h3>
            </div>
            <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
            <div className="panel-body px-3 mb-4">
              <p>Building a website is extremely easy. With a working knowledge of HTML and CSS you will be able to have a site up and running in no time.</p>
            </div>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
            <h3 className="panel-title">
              <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
              How long does it take to ship?
              </a>
            </h3>
            </div>
            <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
            <div className="panel-body px-3 mb-4">
              <p>Using Amazon AWS technology which is an industry leader for reliability you will be able to experience an uptime in the vicinity of 99.95%.</p>
            </div>
            </div>
          </div>
          
          <div className="panel panel-default">
          <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
          <h3 className="panel-title">
            <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
            Is it safe on skin?
            </a>
          </h3>
          </div>
          <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
          <div className="panel-body px-3 mb-4">
            <p>Yes, Solodev CMS is built to handle the needs of any size company. With our Multi-Site Management, you will be able to easily manage all of your websites.</p>
          </div>
          </div>
        </div>
          </div>
      </section>
      <hr className="custom-contact-hr"></hr>
      <section className="row mt-5 mb-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2  id="warranty">Warranty Overview</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3>Details</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
        </div>
      </section>
      <hr className="custom-contact-hr"></hr>
      <div style={{"paddingBottom": "30px", "textAlign": 'center'}} className="container">
<h2 style={{"paddingTop": "20px"}} id="shipping">Shipping and Billing</h2>
  <li style={{"paddingTop": "15px", "paddingBottom": "5px"}}>If the order is past 3 weeks old, it cannot be returned</li>
  <li style={{"paddingTop": "5px", "paddingBottom": "5px"}}>If the order is past 3 weeks old, it cannot be returned</li>
  <li style={{"paddingTop": "5px", "paddingBottom": "5px"}}>If the order is past 3 weeks old, it cannot be returned</li>
</div>
    </main>
    </>
  )
}

