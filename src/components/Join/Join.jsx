import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./Join.css";

// @TODO Emailjs integration
const Join = () => {
  const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span> level up</span>
        </div>

        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
