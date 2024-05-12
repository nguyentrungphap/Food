import React from "react";
import Style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <div className={Style.about}>
          <h3>About Us</h3>
          <p>
            Discover the best foods and drinks in town. Join us to start your
            taste adventure.
          </p>
        </div>
        <div className={Style.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={Style.socials}>
          <h3>Follow Us</h3>
          {/* Icons would be added here */}
          <p>Stay connected with us on social media.</p>
        </div>
      </div>
      <div className={Style.footerBottom}>
        <p>&copy; {new Date().getFullYear()} FoodWeb. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
