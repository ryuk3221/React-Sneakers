import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader"
import { AppContext } from "../../App";

const Card = ({onPlus, onFavorite, name, price, img, id, drawerItems, loading = false}) => {
  const [isFavorite, setFavorite] = useState(false);
  const {isItemAddedToCart} = useContext(AppContext);
  

  // useEffect(() => {
  //   drawerItems.forEach(item => {
  //     if (item.name === name) {
  //        setIsAdded(true);
  //     }
  //   })
  // }, [])

  const handleOnClickAdd =  () => {
    onPlus({name, price, img, id});
    
  };

  const onClickFavorite = () => {
    setFavorite(!isFavorite);
    onFavorite({name, price, img, id}); 
     
  }; 

  return (
    <div className="catalog__item catalog-item">
      {
        loading ? (<ContentLoader 
        speed={2}
        width={150}
        height={245}
        viewBox="0 0 150 205"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
        <rect x="396" y="140" rx="3" ry="3" width="53" height="11" /> 
        <rect x="0" y="137" rx="3" ry="3" width="93" height="15" /> 
        <rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
        <rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
        <rect x="0" y="0" rx="11" ry="11" width="150" height="90" /> 
        <rect x="0" y="110" rx="3" ry="3" width="150" height="15" /> 
        <rect x="0" y="171" rx="8" ry="8" width="80" height="20" /> 
        <rect x="113" y="162" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>) : (
        <>
          <button className="favorite-btn" onClick={onClickFavorite}>
        <img
          className="favorite"
          src={isFavorite ? 'images/icons/item-heart-active.svg' : 'images/icons/item-heart.png'}
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
        <button  className="catalog-item__btn">
          <img
            src={isItemAddedToCart(name) ? "images/icons/galo4ka.svg" : "images/icons/add.svg"}
            alt="icon"
            onClick={handleOnClickAdd}
          />
        </button>
      </div>
        </>)
      }
      

      
    </div>
  );
};

export default Card;
