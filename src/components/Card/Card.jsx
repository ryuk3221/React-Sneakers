const Card = (props) => {
  const onClickButton = () => {};
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
        <button className="catalog-item__btn" onClick={props.onClick}>
          <img src="images/icons/add.svg" alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
