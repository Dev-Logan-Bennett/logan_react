import React from 'react'
import "./homeStyles.scss"
import video from '../images/makeup.webm'

function Home() {
  return (

    <>
      <section className="video-section">
        <div className="showcase">
          <video className="welcome-video img-fluid" src={video} autoPlay muted loop></video>
        <div className="content">
          <div>
            <h1>BENNETTBODYCARE</h1>
            <h3>Get the glow you've always wanted</h3>
          </div>
        </div>
        </div>
      </section>
      <div></div>
      <section className="about" id="about">
        <div>
        <div className="about_message">
          <h1>Contact us on social media</h1>
          <p>We are on Twitter, Instagram, and Facebook!</p>
          <h2>Follow me on social media</h2>
        </div>
        <div className="social">
		  	<a href="https://google.com" rel="noopener noreferrer" target="_blank"> <i className="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
				<a href="https://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a>
				<a href="https://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-square fa-4x" aria-hidden="true"></i></a>
				<a href="https://google.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
        </div>
        <hr className="ending-hr" />
        </div>
      </section>
    </>
  );
}
export default Home