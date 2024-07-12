import image from "../../assets/images/ad.png";
import "./AdBanner.css";

function AdBanner() {
  return <div className="ad-banner container">
        <img src={image} alt="" />
    </div>
}

export default AdBanner;