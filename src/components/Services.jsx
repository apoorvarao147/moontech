import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/3.jpg";
import image2 from "../assets/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop={true} autoPlay showStatus={false} showThumbs={false} interval={2000} >
        <div>
          <img src={image1} alt="item" />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={image2} alt="item" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
