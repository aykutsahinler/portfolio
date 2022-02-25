import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Slider = ({ images }) => {
  const navigate = useNavigate();

  return (
    <div className="slider-container">
      <Carousel showThumbs={false} autoPlay>
        {images.map((item) => {
          return (
            <div
              key={item.key}
              className="img-1"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => navigate(item.to)}
            ></div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
