import "./Singlecard.css";
import {LuPlus} from "react-icons/lu";
function Singlecard({singleTitle, singlePrice, img}) {
  return ( <div className="single-card">
    <div className="single-card__image">
      <img src={img}/>
    </div>
    <p className="single-title">{singleTitle}</p>
    <div className="single-bottom">
      <div className="single-info">
        <p>Цена:</p>
        <h1>{singlePrice}</h1>
      </div>
      <button>
        <LuPlus size={11} color="#D3D3D3" />
        </button>
    </div>
  </div>
  );
}

export default Singlecard;