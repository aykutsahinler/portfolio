import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Slider = ({ images, setDetail, show, setShow }) => {
  const navigate = useNavigate();

  const onClickImage = (url) => {
    navigate(url);
    setDetail(true);
    setShow(false);
  };

  return (
    <div className="slider-container">
      <Carousel showThumbs={false} autoPlay>
        {images.map((item) => {
          return (
            <div
              key={item.key}
              className="img"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => onClickImage(item.to)}
            ></div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
