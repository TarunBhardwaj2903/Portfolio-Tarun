import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TARUN
              <br />
              <span>BHARDWAJ</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Aspiring</h3>
            <h2 className="landing-info-h2">AI Engineer</h2>
            <h2 className="landing-info-role">Software Developer</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
