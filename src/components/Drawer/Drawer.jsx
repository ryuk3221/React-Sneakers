import React, { useContext, useState } from "react";
import axios from "axios";
import Info from "../Info";
import { AppContext } from "../../App";

const Drawer = ({onClick, items = [], onMinus}) => {
  const {isComplete, setIsComplete} = useContext(AppContext);
  const {setDrawerItems, drawerItems} = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const {isOpen} = useContext(AppContext);
  const closeDrawer = (event) => {
    if (event.target.classList.contains('drawer')) {
      onClick();
      setIsComplete(false);
    }
  }

  const onClickComplete = async () => {
    try {
      setIsComplete(true);
      setDrawerItems([]);
      const {data} = await axios.post('https://6490876b1e6aa71680cb6990.mockapi.io/Orders', {
        items: drawerItems
      });
      setOrderId(data.id);
      for (let i of drawerItems) {
        await axios.delete(`https://648b792b17f1536d65eafd99.mockapi.io/cartItems/${i.id}`);
      }
    } catch (err) {
      alert('Не удалось создать заказ :(');
    }
  }

  const getSumOfCart = () => {
    let sum = 0;
    if (drawerItems.length > 0) {
      drawerItems.forEach(element => {
        sum += element.price;
      });
    }
    return sum;
  }
  return (
    <div className={(isOpen ? 'drawer drawer-open' : 'drawer')} onClick={closeDrawer}>
      <div className={(isOpen ? 'drawer__inner drawer__inner-open' : 'drawer__inner')}>
        <div className="drawer__head">
          <h3 className="drawer__title">Корзина</h3>
          <button className="close-drawer" onClick={onClick}>
            <img src="images/icons/delete-icon.svg" alt="" />
          </button>
        </div>

        {items.length !== 0 ? (
        <div className="drawer__footer">
          <div className="drawer__items">

            {
              items.map(item => (
                <div key={`drawer${item.name}`} className="bag-item">
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
                <span className="drawer__info-price">{getSumOfCart()} руб.</span>
              </div>

            

              <div className="drawer__info-item" onClick={onClickComplete}>
                <button className="drawer__btn">Оформить заказ</button>
              </div>
            </div>
        </div>
        ) : (
        <Info 
          img={isComplete ? 'images/oformlen.png' : 'images/box.png'} 
          title={isComplete ? 'Заказ оформлен' : 'Корзина пустая'}
          text={isComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          onClick={onClick}
        />
        )}
        
        
      </div>
    </div>
  );
};

export default Drawer;
