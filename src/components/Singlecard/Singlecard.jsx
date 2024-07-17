import "./Singlecard.css";
import {useState} from "react";
import {LuHeart, LuCheck, LuPlus} from "react-icons/lu";
function Singlecard({singleTitle, singlePrice, img}) {
  const [selected, setSelected] = useState(false);
  const [liked, setLiked] = useState(false);
  return ( 
  <div className="single-card">
    <div className="single-like">
    <button 
    className={liked && "liked"}
    onClick={() => setLiked(!liked)}>
        <LuHeart size={12} fill={liked ? "#FF8585" : "none"} color={liked && "#FF8585"}/>
    </button>
    </div>
    <div className="single-card__image">
      <img src={img}/>
    </div>
    <p className="single-title">{singleTitle}</p>
    <div className="single-bottom">
      <div className="single-info">
        <p>Цена:</p>
        <h1>{singlePrice}</h1>
      </div>
      <button 
      className={selected && "selected"} 
      onClick={() => setSelected(!selected)}
      >
        {!selected ? (
          <LuPlus size={12} color="#D3D3D3" />
        ) : (
        <LuCheck size={12} color="white"/>
        )}
        </button>
    </div>
  </div>
  );
}

export default Singlecard;