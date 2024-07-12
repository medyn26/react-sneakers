import Singlecard from "../Singlecard/Singlecard";
import "./Cards.css";

import shoes1 from "../../assets/images/shoes1.png";
import shoes2 from "../../assets/images/shoes2.png";
import shoes3 from "../../assets/images/shoes3.png";
import shoes4 from "../../assets/images/shoes4.png";
import shoes5 from "../../assets/images/shoes5.png";
import shoes6 from "../../assets/images/shoes6.png";
import shoes7 from "../../assets/images/shoes7.png";
import shoes8 from "../../assets/images/shoes8.png";
import shoes9 from "../../assets/images/shoes9.png";
import shoes11 from "../../assets/images/shoes11.png";

function Cards() {
  let single = [
    {
      singlePrice: "12 999 руб.",
      singleTitle: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: shoes1,
    },
    {
      singlePrice: "12 999 руб.",
      singleTitle: "Мужские Кроссовки Nike Air Max 270",
      image: shoes2,
    },
    {
      singlePrice: "8 499 руб.",
      singleTitle:"Мужские Кроссовки Nike Blazer Mid Suede",
      image: shoes3,
    },
    {
      singlePrice: "8 999 руб.",
      singleTitle: "Кроссовки Puma X Aka Boku Future Rider",
      image: shoes4,
    },
    {
      singlePrice: "15 199 руб.",
      singleTitle: "Мужские Кроссовки Under Armour Curry 8",
      image: shoes5,
    },
    {
      singlePrice: "11 299 руб.",
      singleTitle: "Мужские Кроссовки Nike Kyrie 7",
      image: shoes6,
    },
    {
      singlePrice: "10 799 руб.",
      singleTitle: "Мужские Кроссовки Jordan Air Jordan 11",
      image: shoes7,
    },
    {
      singlePrice: "16 499 руб.",
      singleTitle: "Мужские Кроссовки Nike LeBron XVIII",
      image: shoes8,
    },
    {
      singlePrice: "13 999 руб.",
      singleTitle: "Мужские Кроссовки Nike Lebron XVIII Low",
      image: shoes9,
    },
    {
      singlePrice: "8 499 руб.",
      singleTitle: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: shoes1,
    },
    {
      singlePrice: "8 999 руб.",
      singleTitle: "Кроссовки Puma X Aka Boku Future Rider",
      image: shoes4,
    },
    {
      singlePrice: "11 299 руб.",
      singleTitle: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      image: shoes11,
    },
  ];
  return (
  <div className="cards-wrapper">
    <div className="cards-top container">
      <h1>Все кроссовки</h1>
    </div>
    <div className="cards container">
        {single.map(( single, index ) => {
          return(
            <Singlecard
          key={index}
          singlePrice={single.singlePrice} 
          singleTitle={single.singleTitle}
          img={single.image} 
          />
          );
          })}
    </div>
  </div>
  );
}

export default Cards;