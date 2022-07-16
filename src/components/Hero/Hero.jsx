import Header from "../Header/Header";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/*the-best-ad  */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shapeand build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert couches</span>
          </div>
          <div>
            <span>+894</span>
            <span>members joined</span>
          </div>{" "}
          <div>
            <span>+40</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Button */}
        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn"> Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};
export default Hero;
