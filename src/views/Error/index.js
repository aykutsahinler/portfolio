import { useNavigate } from "react-router-dom";
import "./styles.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrap-404">
        <div className="label">Error</div>
        <div className="numbers">
          <div className="number">
            <div className="four"></div>
          </div>
          <div className="number">
            <div className="zero">
              <span></span>
            </div>
          </div>
          <div className="number">
            <div className="four last"></div>
          </div>
        </div>
        <div className="text">
          <p>Looks like you got lost... </p>
          <p>
            Let me bring you at
            <strong className="strong" onClick={() => navigate("/")}>
              {" "}
              home
            </strong>
            .
          </p>
        </div>
        <div className="sleep-walker">
          <div className="man">
            <div className="head"></div>
            <div className="torso">
              <div className="arm-a"></div>
              <div className="arm-b"></div>
            </div>
            <div className="legs">
              <div className="leg-a"></div>
              <div className="leg-b"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
