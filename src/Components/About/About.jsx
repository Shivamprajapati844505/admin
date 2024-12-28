import "./About.css";
import p1 from "../Assets/food_waste.png";

const About = () => {
  return (
    <div className="about">
      <img src={p1} alt="p1"/>
      <div className="about-content">
        <h1>About Us</h1>
        <hr />
        <li>This app is created to help poor and needy people.</li>
        <li>
          In India, thousands of people sleep hungry every night, unable to
          access food. This unfortunate situation leads to severe issues like
          starvation, malnutrition, and related diseases.
        </li>
        <li>
          Our mission is to combat hunger by ensuring these individuals receive
          the food they need to survive and thrive.
        </li>
      </div>
    </div>
  );
};

export default About;
