import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import banner1 from "../../images/main-banner-1.jpg";
import banner2 from "../../images/catbanner-01.jpg";
import banner3 from "../../images/catbanner-02.jpg";
import banner4 from "../../images/catbanner-03.jpg";
import banner5 from "../../images/catbanner-04.jpg";
import famous1 from "../../images/famous-1.webp";
import famous2 from "../../images/famous-2.webp";
import famous3 from "../../images/famous-3.webp";
import famous4 from "../../images/famous-4.webp";
import brand1 from "../../images/brand-01.png";
import brand2 from "../../images/brand-02.png"
import brand4 from "../../images/brand-03.png"
import brand5 from "../../images//brand-04.png"
import brand6 from "../../images/brand-05.png"
import brand7 from "../../images/brand-06.png"
import brand8 from "../../images/brand-07.png"
import brand9 from "../../images/brand-08.png"
import {TbCurrencyTaka} from "react-icons/tb";
import service1 from "../../images/service.png";
import service2 from "../../images/service-02.png";
import service3 from "../../images/service-03.png";
import service4 from "../../images/service-04.png";



import Container from "../Container";
import BlogCard from "../BlogCard/BlogCard";
import Product from "../Product/Product";
import Shop from "../Shop/Shop";
import ProductCard from "../ProductCard/ProductCard";


const Home = () => {
  return (
    <>
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
                <p>From <TbCurrencyTaka/> 9999.00 or <TbCurrencyTaka/>410.62/mo.</p>
                <Link to={"/ourstore"} className="button">BUY NOW</Link>
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
                    From <TbCurrencyTaka/>9999.00 <br /> or <TbCurrencyTaka/>410.62/mo.
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
                    From <TbCurrencyTaka/>9.00 <br /> or <TbCurrencyTaka/>410.62/mo.
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
                    From <TbCurrencyTaka/>9990.00 <br /> or <TbCurrencyTaka/>410.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={banner5}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From <TbCurrencyTaka/>999.00 <br /> or <TbCurrencyTaka/>410.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">

          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-item-center gap-15">
                  <img src={service1} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">
                      From All Order Over <TbCurrencyTaka/> 1000
                    </p>
                  </div>

                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src={service2} alt="" />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className="mb-0">
                      Save Upto 25% Off
                    </p>
                  </div>

                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src={service3} alt="" />
                  <div>
                    <h6>24 / 7</h6>
                    <p className="mb-0">
                      Shop With An Expert
                    </p>
                  </div>

                </div>
                <div className="d-flex align-item-center gap-15">
                  <img src={service4} alt="" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">
                      100% Protected Payment 
                    </p>
                  </div>

                

              </div>
            </div>
          </div>
        </div>

      </Container>
      
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
      <Shop/>
          
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous1}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous2}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous3}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous4}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <Shop/>
        </div>
        <div className="row">
          
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <Shop/>
        </div>
        <div className="row">
          
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand9} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard/>
           
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
          <div className="col-3">
          <BlogCard/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
