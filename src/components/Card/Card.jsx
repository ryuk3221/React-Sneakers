import { useState } from "react";

const Card = ({onPlus, name, price, img, id}) => {

  const [isAdded, setIsAdded] = useState(false);

  const handleOnClickAdd = () => {
    setIsAdded(!isAdded);
    onPlus({name, price, img, id});  
  }; 

  return (
    <div className="catalog__item catalog-item">
      <button className="favorite-btn">
        <img
          className="favorite"
          src="images/icons/item-heart-active.svg"
          alt=""
        />
      </button>
      <div className="catalog-item__img-box">
        <img className="catalog-item__img" src={img} alt="product-img1" />
      </div>
      <h6 className="catalog-item__title">{name}</h6>
      <div className="catalog-item__footer">
        <div className="catalog-item__price-box">
          <span className="catalog-item__price-text">ЦЕНА:</span>
          <span className="catalog-item__price">{price} руб.</span>
        </div>
        <button className="catalog-item__btn">
          <img
            src={isAdded ? "images/icons/galo4ka.svg" : "images/icons/add.svg"}
            alt="icon"
            onClick={handleOnClickAdd}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
