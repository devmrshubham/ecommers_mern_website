import React from "react";
import BestSeller from "./BestSeller";
import logo from "./images/2_corousel.png";
import IshopLogo from "./images/iSHOP Logo.svg";
import Iphone6 from "./images/iphone_6_plus.png";
import Icon1 from "./images/beats_solo_2@2x.png";
import Icon2 from "./images/H-squared.png";
import Icon3 from "./images/Netatmo_rain.png";
import ShoppingLogo from "./images/shipping.svg";
import refund from "./images/refund.svg";
import support from "./images/support.svg";
import ishopLogo from "./images/ishop.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import { Link } from "react-router-dom";
import HeadingIshop from "./HeadingIshop";

const Home = () => {
  return (
    <div className="main-container top-container">
      <div className="container">
        <HeadingIshop />
        <div className="row">
          <div className="ishop-img">
            <img src={IshopLogo} alt="" />
            <div className="close">
              <i className="fa fa-bars" aria-hidden="true" id="bar" />
            </div>
          </div>
          <div className="menu" id="main-menu">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <a href="index2.html">Store</a>
            </div>
            <div>
              <a href="iphone.html">iphone</a>
            </div>
            <div>
              <a href="ipad.html">ipad</a>
            </div>
            <div>
              <a href="macbook.html">macbook</a>
            </div>
            <div>
              <a href="index3.html">accesories</a>
            </div>
            <div className="close" id="close-menu">
              <i className="fa fa-times" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="row">
          <img src={logo} alt="" />
        </div>

        <BestSeller />
        <div className="row">
          <div className="lord">
            <p>LOAD MORE</p>
          </div>
        </div>
        <div className="row">
          <div className="left-title">
            <p id="phone">iPhone 6 Plus</p>
            <p>
              performance and design Taken <br />
              right to the edge.
            </p>
            <div className="shop-now">SHOP NOW</div>
          </div>
          <div className="right-logo">
            <img src={Iphone6} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="child">
            <div className="box-icon">
              <img src={ShoppingLogo} alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>FREE SHIPPING</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat obcaecati id accusamus dicta harum qui non porro Lorem
                ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="child">
            <div className="box-icon">
              <img src={refund} alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>100% REFUND</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat obcaecati id accusamus dicta harum qui non porro Lorem
                ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="child">
            <div className="box-icon">
              <img src={support} alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>SUPPORT 24/7</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat obcaecati id accusamus dicta harum qui non porro Lorem
                ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="heading">
            <h3>FEATURED PRODUCTS</h3>
          </div>
          <div className="parent">
            <div className="cells">
              <div className="left-item">
                <img src={Icon1} alt="" />
              </div>
              <div className="right-info">
                <b>Beats Solo 2 On Ear Headphones - Black</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
            <div className="cells">
              <div className="left-item">
                <img src={Icon2} alt="" />
              </div>
              <div className="right-info">
                <b>H-Squared tvTray</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
            <div className="cells">
              <div className="left-item">
                <img src={Icon3} alt="" />
              </div>
              <div className="right-info">
                <b>Netatmo Rain Gauge</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="lo-go">
              <img src={ishopLogo} alt="" />
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="follow-us">
              <b>follow Us</b>
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <br />
              <div className="logos">
                <img src={facebook} alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contact-us">
              <b>Contact Us</b>
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="footer">
            <div className="footer-heading">
              <b>Infomation</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <b>Service</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <b>Extras</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <b>My Account</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <b>Userful Links</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="footer-heading">
              <b>Our Offers</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy</li>
                <li>Policy Terms &amp;Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
