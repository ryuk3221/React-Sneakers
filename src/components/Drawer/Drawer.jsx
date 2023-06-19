const Drawer = ({onClick, items = [], onMinus}) => {
  const closeDrawer = (event) => {
    if (event.target.className === 'drawer') {
      onClick();
    }
  }
  return (
    <div className="drawer" onClick={closeDrawer}>
      <div className="drawer__inner">
        <div className="drawer__head">
          <h3 className="drawer__title">Корзина</h3>
          <button className="close-drawer" onClick={onClick}>
            <img src="images/icons/delete-icon.svg" alt="" />
          </button>
        </div>
        <div className="drawer__items">

          {
            items.map(item => (
              <div className="bag-item">
                <div className="bag-item__img-box">
                  <img
                    className="bag-item__img"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="bag-item__text">
                  <h6 className="bag-item__title">
                    {item.name}
                  </h6>
                  <span className="bag-item__price">{item.price}</span>
                </div>
                <button className="bag-item__btn item-delete" onClick={() => onMinus(item)}>
                  <img src="images/icons/delete-icon.svg" alt=""/>
                </button>
              </div>
            ))
          }

          
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
