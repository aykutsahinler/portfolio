import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./styles.css";

function Slider() {
  return (
    <div className="slider-container">
      <Carousel showThumbs={false} autoPlay>
        <div className="img-1"></div>
        <div className="img-2"></div>
        <div className="img-3"></div>
        <div className="img-4"></div>
        <div className="img-5"></div>
        <div className="img-6"></div>
      </Carousel>
    </div>
  );
}

export default Slider;
