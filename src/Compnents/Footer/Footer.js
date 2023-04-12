
import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai';
import {SiTiktok} from "react-icons/si";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-item-center ">
                <img src="../../images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter </h2>

              </div>
            </div>
            <div className="col-5">
              <div class="input-group ">
                <input type="text" class="form-control py-1" placeholder="Your Email Address Write Here.." aria-label="Your Email Address Write Here.." aria-describedby="basic-addon2"/>
                 <Link to="/login"><button  class="input-group-text p-2" id="basic-addon2">Subscribe</button></Link> 
              </div>
          </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 col-design">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='text-white fs-6'>
                <address>
                  #35, Road 1, <br/>
                  Block A, Bashundhara R/A, Dhaka, <br/>
              Bangladesh, 1229.
                </address>
                <a href="(+880) 12345678" className="nt-4 team d-block mb-3">(+880) 12345678</a>
                <a href="abcd@gmail,.com" className="nt-4 team d-block mb-3">hayroo@customersupport.com</a>
                <div className="social-icons d-flex align-items-center gap-30 ">
                  <a href="facebook.com"><AiFillFacebook className='icon'/></a>
                  <a href="instragram.com"><AiFillInstagram className='icon'/></a>
                  <a href="tiktok.com"><SiTiktok className='icon'/></a>
                  <a href="youtube.com"><AiFillYoutube className='icon'/></a>
                </div>
              </div>
            </div>
            <div className="col-3 col-design">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className='py-2 text-white mb-1'>Privacy Policy</Link>
                <Link to="/refund-policy"  className='py-2 text-white mb-1'>Refund Policy</Link>
                <Link to="/shipping-policy" className='py-2 text-white mb-1'>Shipping Policy</Link>
                <Link to="/term-conditions" className='py-2 text-white mb-1'>Terms & Condition</Link>
                <Link to="/blogs" className='py-2 text-white mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3 col-design">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/about" className='py-2 text-white mb-1'>About Us</Link>
                <Link className='py-2 text-white mb-1'>FAQ</Link>
                <Link to="/contact" className='py-2 text-white mb-1'>Contact</Link>
                
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='py-2 text-white mb-1'>Laptops</Link>
                <Link className='py-2 text-white mb-1'>Head Phones</Link>
                <Link className='py-2 text-white mb-1'>Tablet</Link>
                <Link className='py-2 text-white mb-1'>Smart Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className='text-center'>&copy; {new Date().getFullYear()}, Developed By <span className='team'>TEAM 404</span>. {" "}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
            
        </div>
    );
};

export default Footer;
