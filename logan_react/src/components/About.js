import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import "./about.scss"
import imgGirl from "./images/olivia_bennett.jpg";
import imgBoy from "./images/logan_bennett.jpg";
import arrow from './images/arrow-right.svg'
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';


function About() {
  const prop = useSpring({config: {friction: 500 } , opacity: 1, from: {opacity: 0}})
  const contProp = useSpring({config: {friction: 1000 } , opacity: 1, from: {opacity: 0}})

  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});

  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, .8, {y: 1280, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.0, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 1.6, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  }, [tl])


  return (
    <>
    <div className="hero" ref={el => app = el}>
      <section className="row hero-inner">
        <div className="hero-content col-lg-5 col-md-6 col-sm-12">
          <div className="hero-content-inner" ref={el => content = el}>
              <animated.h1 style={contProp}>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Welcome to</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">our about page!</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Learn more about us here!</div>
                </div>
              </animated.h1>
              <p>
                Better treatment of our staff leads to better products for you!
                This section denotes our CEO, models, and developer for our company.
              </p>
              <div className="btn-row">
                <button className="explore-button">Store
                  <div className="arrow-icon">
                   <Link to="/store"><img src={arrow} alt="row"/></Link> 
                  </div>
                </button>
              </div>
            </div>
        </div>
        <animated.div style={prop} className="hero-images col-lg-7 col-md-6 col-sm-12">
          <div ref={el => images = el}  className="hero-images-inner row">
            <div className="hero-image boy col-sm-12 img-fluid">
              <img src={imgBoy} alt="boy" />
              <div className="boy-details pt-2">
                <h3><u>Logan Bennett</u></h3>
                <p>I am the Developer of the website. To those code-savy people, it is built with the MERN stack, animated with gsap and react-spring.</p>
              </div>
            </div>
            <div className="hero-image girl col-sm-12 img-fluid">
              <img src={imgGirl} alt="girl" />
              <div className="girl-details pt-2">
                <h3><u>Olivia Bennett</u></h3>
                <p>I am the CEO and Founder of this company. I've been struggling with skin-care for a while. No products helped me, so I made my own.</p>
              </div>
            </div>
          </div>
        </animated.div>
      </section>
    </div>
    </>
  );
}

export default About;
