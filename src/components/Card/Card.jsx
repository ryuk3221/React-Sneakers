import { useState } from "react";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleOnClickAdd = () => {
    if (isAdded) {
      setIsAdded(false);
    } else {
      setIsAdded(true);
    }
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
        <img className="catalog-item__img" src={props.img} alt="product-img1" />
      </div>
      <h6 className="catalog-item__title">{props.name}</h6>
      <div className="catalog-item__footer">
        <div className="catalog-item__price-box">
          <span className="catalog-item__price-text">ЦЕНА:</span>
          <span className="catalog-item__price">{props.price} руб.</span>
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
