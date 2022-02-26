import { useNavigate } from "react-router-dom";
import "./styles.css";

const DetailImage = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <img alt="imageDesc" loading="lazy" src={image} className="image" />
      <div className="close" onClick={() => navigate(-1)}>
        <div className="close-container">
          <span className="cross-line top-left"></span>
          <span className="cross-line top-right"></span>
          <span className="cross-line bottom-left"></span>
          <span className="cross-line bottom-right"></span>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
