import React from "react";
import './About.css';
import { NavLink } from 'react-router-dom';
import PageHeading from "../common/PageHeading";

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4"></h1>
            <p className="lead mb-4">
              Welcome to MINITURE – where fashion meets passion!<br/><br/>
              At MINITURE, we believe that clothing is more than just fabric; it's a form of self-expression and a celebration of individuality. Our journey began with a simple yet profound vision: to create stylish, high-quality garments that inspire confidence and make every day a little brighter.<br/><br/>
              Our Story<br/>
              Founded in 1946, MINITURE emerged from a desire to blend timeless elegance with modern trends. Our founder, ABILASH AL, envisioned a brand that caters to those who seek both comfort and sophistication in their wardrobe. With a background in fashion design/retail/another relevant field, ABILASH AL set out to craft a collection that stands out for its unique style, exceptional craftsmanship, and sustainable practices.<br/><br/>
              Our Philosophy<br/>
              We love seeing how our pieces become a part of your unique story.<br/><br/>
              Thank you for choosing MINITURE. We’re excited to be a part of your fashion journey and look forward to bringing you more incredible designs in the future!<br/><br/>
              Warm regards,<br/>
              The MINITURE Team
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 img-container">
            <img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-12-09-clothing-website-1.jpg" alt="About Us" height="500px" width="650px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
