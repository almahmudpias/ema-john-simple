import React from 'react';
import { Container } from 'react-bootstrap';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import "./Banner.css";
import banner1 from "../../images/main-banner-1.jpg";
import banner2 from "../../images/catbanner-01.jpg";
import banner3 from "../../images/catbanner-03.jpg";
import banner4 from "../../images/catbanner-04.jpg";

const Banner = () => {
    return (
        <div>
            <br />
    <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src={banner1}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From <TbCurrencyTaka size={20}/> 999.00 or <TbCurrencyTaka size={20}/> 41.62/mo.</p>
                <Link to="/product" className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={banner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From <TbCurrencyTaka size={10}/> 9999.00 <br /> or <TbCurrencyTaka size={10}/> 410.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src={banner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From <TbCurrencyTaka size={10}/>9999.00 <br /> or <TbCurrencyTaka size={10}/>410.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={banner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From <TbCurrencyTaka size={10}/>99999.00 <br /> or <TbCurrencyTaka size={10}/>4100.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={banner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From <TbCurrencyTaka size={10}/>9999.00 <br /> or <TbCurrencyTaka size={10}/>410.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
        </div>
    );
};

export default Banner;