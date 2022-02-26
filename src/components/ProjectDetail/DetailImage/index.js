import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const DetailImage = ({ image }) => {
  return (
    <div>
      <img alt="imageDesc" loading="lazy" src={image} className="image" />
    </div>
  );
};

export default DetailImage;
