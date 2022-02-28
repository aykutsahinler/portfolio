import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const DetailImage = ({ index, images }) => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <div className="slider-container1">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {images[index].images.map((item) => {
            return (
              <div
                key={item.key}
                className="img1"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            );
          })}
        </Carousel>
      </div>
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
