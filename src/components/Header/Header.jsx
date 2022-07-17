import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menOpened, setMenOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenOpened(false)}>Home</li>
          <li onClick={() => setMenOpened(false)}>Programs</li>
          <li onClick={() => setMenOpened(false)}>Why us</li>
          <li onClick={() => setMenOpened(false)}>Plans</li>
          <li onClick={() => setMenOpened(false)}>Testimonial</li>
        </ul>
      )}
    </div>
  );
};
export default Header;
