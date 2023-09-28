import React from "react";
import logo from "../assets/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo"/>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes – served with a modern twist.</p>
          <p>If you have any questions? Contact us!</p>
        </div>

        <div>
          <h3>Important Links</h3>
          <ul>
            <li href="/"><a>Home</a></li>
            <li href="/"><a>About</a></li>
            <li href="/"><a>Menu</a></li>
            <li href="/"><a>Reservations</a></li>
            <li href="/"><a>Order Online</a></li>
            <li href="/"><a>Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address:<br/>60601 Chicago, USA</li>
            <li>Phone:<br/>+1 123 456 789</li>
            <li>Email:<br/>little@lemon.com</li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X/Twitter</li>
            <li>Snapchat</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
