import React from 'react'
import "./footer.scss"
export default function Footer() {
  return (
  <footer id="footer" className="footer-1">
    <section className="main-footer widgets-dark typo-light">
      <div className="row  ml-5 top-footer-cont"> 
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget subscribe">
            <h5 className="widget-title">Company Name<span></span></h5>
            <p>About the company, little discription will go here.. </p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget">
            <h5 className="widget-title">Quick Links<span></span></h5>
            <ul className="thumbnail-widget">
              <li>
                <a className="thumb-content" href="https://google.com">Get Started</a>	
              </li>
              <li>
                <a className="thumb-content" href="https://google.com">Top Leaders</a>	
              </li>
              <li>
                <a className="thumb-content" href="https://google.com">Success Stories</a>	
              </li>
              <li>
                <a className="thumb-content" href="https://google.com">Event/Tickets</a>	
              </li>
              <li>
                <a className="thumb-content" href="https://google.com">News</a>	
              </li>
              <li>
                <a className="thumb-content" href="https://google.com">Lifestyle</a>	
              </li>
              <li>
                  <a className="thumb-content" href="https://google.com">About</a>	
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="widget">
            <h5 className="widget-title">Get Started<span></span></h5>
            <p>Get access to your full Training and Marketing Suite.</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="widget">
          <h5 className="widget-title">Contact Us<span></span></h5>

          <p><a className="text-light" href="https://google.com" title="glorythemes">info@domain.com</a></p>
          <ul className="social-footer2">
            <li className=""><a title="youtube" target="_blank" rel="noopener noreferrer" href="https://google.com"><i className="fa fa-youtube-play p-2" aria-hidden="true"></i></a></li>
            <li className=""><i className="fa fa-twitter p-2" aria-hidden="true"></i></li>
            <li className=""><i className="fa fa-instagram p-2" aria-hidden="true"></i></li>
          </ul>
        </div>
        </div>
      </div>
    </section>
      
    <div className="footer-copyright">
      <div className="col-md-12 text-center">
        <p>Copyright Company Name © 2016. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
