import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Card from "../Card/Card"
import axios from "axios";

const Orders = ({isOpen, orders}) => {
  const {setOpenOrders} = useContext(AppContext);

  return (
    <div className={(isOpen ? 'orders orders-open' : 'orders')} >
      <div className={(isOpen ? 'orders__inner orders__inner-open' : 'orders__inner')}>
        <div className="orders__inner-head">
          <h1 className="orders__title">Мои заказы</h1>
          <button className="close-orders" onClick={() => setOpenOrders(false)}>
            <img src="images/icons/delete-icon.svg" alt="" />
          </button>
        </div>
        <div className="orders__items">
          {orders.map( item => (
            <Card {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders;