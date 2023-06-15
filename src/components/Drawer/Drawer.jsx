const Drawer = (props) => {
  return (
    <div className="drawer">
      <div className="drawer__inner">
        <div className="drawer__head">
          <h3 className="drawer__title">Корзина</h3>
          <button className="close-drawer" onClick={props.onClick}>
            <img src="images/icons/delete-icon.svg" alt="" />
          </button>
        </div>
        <div className="drawer__items">
          <div className="bag-item">
            <div className="bag-item__img-box">
              <img
                className="bag-item__img"
                src="images/catalog/img3.png"
                alt=""
              />
            </div>
            <div className="bag-item__text">
              <h6 className="bag-item__title">
                Мужские Кроссовки Nike Air Max 270
              </h6>
              <span className="bag-item__price">12 999 руб.</span>
            </div>
            <button className="bag-item__btn item-delete">
              <img src="images/icons/delete-icon.svg" alt="" />
            </button>
          </div>

          <div className="bag-item">
            <div className="bag-item__img-box">
              <img
                className="bag-item__img"
                src="images/catalog/img4.png"
                alt=""
              />
            </div>
            <div className="bag-item__text">
              <h6 className="bag-item__title">
                Мужские Кроссовки Nike Air Max 270
              </h6>
              <span className="bag-item__price">12 999 руб.</span>
            </div>
            <button className="bag-item__btn item-delete">
              <img src="images/icons/delete-icon.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="drawer__info">
          <div className="drawer__info-item">
            <span className="drawer__info-text">Итого: </span>
            <span className="drawer__info--dashed"></span>
            <span className="drawer__info-price">21 498 руб.</span>
          </div>

          <div className="drawer__info-item">
            <span className="drawer__info-text">Налог 5%: </span>
            <span className="drawer__info--dashed"></span>
            <span className="drawer__info-price">1074 руб. </span>
          </div>

          <div className="drawer__info-item">
            <button className="drawer__btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
