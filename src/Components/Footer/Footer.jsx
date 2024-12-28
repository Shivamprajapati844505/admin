import "./Footer.css";
import foodLogo from "../Assets/food_waste.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <img src={foodLogo} alt={foodLogo} class="food-logo" />
          <p class="mission-statement">
            Join us in the fight to reduce
            <br /> food waste and create a <br />
            sustainable future for all.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <ul class="footer-links">
            <li>
              <Link to="/mission">Policy</Link>
            </li>
            <li>
              <Link to="/mission">Mission</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul class="footer-social-logo">
            <li>
              <a href="https://www.facebook.com">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
            <a href="https://wa.me/your-number">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: mitmoradabad@gmail.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; MIT Final Year Students 2025 .</p>
      </div>
    </footer>
  );
};

export default Footer;
