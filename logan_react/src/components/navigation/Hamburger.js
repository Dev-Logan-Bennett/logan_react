import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import dallas from "../../images/dallas.webp";
import austin from "../../images/austin.webp";
import newyork from "../../images/newyork.webp";
import sanfrancisco from "../../images/sanfrancisco.webp";
import beijing from "../../images/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing }
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  let bottom = useRef(null);
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 0.8, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      fadeInUp(bottom);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
      <section ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
      <div
        ref={el => (cityBackground = el)}
        className='menu-city-background'
      ></div>
      <div className='wrapper'>
        <div className='menu-links'>
          <div className="row">
            <nav className="col-lg-8 col-md-6 col-sm-12">
              <ul>
                <li>
                  <Link
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line1 = el)}
                    to='/store'>
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line2 = el)}
                    to='/contact-us'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line3 = el)}
                    to='/about-us'>
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
            <div ref={el => (info = el)} className='info col-lg-4 col-md-6 col-sm-12'>
              <h3>Our Promise</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      </div>
      <div className="container">
        <div className='locations row'  ref={el => (bottom = el)} >
          Locations:
          {/* Returning the list of cities */}
          {cities.map(el => (
            <span
              key={el.name}
              onMouseEnter={() => handleCity(el.image, cityBackground)}
              onMouseOut={() => handleCityReturn(cityBackground)}>
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
