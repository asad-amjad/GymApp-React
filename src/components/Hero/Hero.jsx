import Header from "../Header/Header";
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
      </div>
      <div className="right-h">Right</div>
    </div>
  );
};
export default Hero;
