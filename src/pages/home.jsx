import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Drawer from "../components/Drawer/Drawer";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [drawerItems, setDrawerItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [catalog, setCatalog] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    axios.get('https://648b792b17f1536d65eafd99.mockapi.io/catalog')
      .then(res => {
        setCatalog(res.data);
      })
      .catch(err => {
        alert('Не удалось загрузить каталог товаров (')
      })
    
    axios.get('https://648b792b17f1536d65eafd99.mockapi.io/cartItems')
      .then(res => {
        setDrawerItems(res.data)
      })
      .catch(err => {
        alert('Не удалось получить данные корзины')
      })
    
  }, [])

  const onFavorite = (obj) => {
    setFavoriteItems(prev => [...prev, obj]);
    
  }

  const addToCart = async (obj) => {
    const cartItem = await axios.post('https://648b792b17f1536d65eafd99.mockapi.io/cartItems', obj);
    setDrawerItems(prev => [...prev, cartItem.data]);
  }
  const deleteItemFromCart = (obj) => {   
    setDrawerItems(drawerItems.filter((item) => item !== obj));
    axios.delete(`https://648b792b17f1536d65eafd99.mockapi.io/cartItems/${obj.id}`)
      .catch(err => {
        alert('Не удалость подключиться к базе данных')
      })
    ;
  }
  
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  }
  
  return (
    <>
      {/* {isOpen ? <Drawer onMinus={deleteItemFromCart} items={drawerItems} onClick={() => setOpen(false)} /> : null}

      <Header onClick={() => setOpen(true)} quany={drawerItems.length}/> */}
      <section className="catalog">
        <div className="container">
          <div className="catalog__head">
            <h1 className="catalog__title">{inputValue ? 'Поиск по запросу : ' + inputValue : 'Все кроссовки'}</h1>
            <div className="catalog__input">
              <img src="images/icons/search.svg" alt="Search" />
              <input onChange={getInputValue} value={inputValue} type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="catalog__inner">
            {catalog
              .filter((item) => item.name.toUpperCase().includes(inputValue.toUpperCase()))
              .map((item, index) => (
                <Card 
                  onFavorite={onFavorite}  
                  onPlus={ addToCart } 
                  id={String(index + 1)} 
                  name={item.name} 
                  price={item.price} 
                  img={item.img} 
                  key={`${item.price}${index}`}
                  drawerItems={drawerItems}
                />
              ))}
          </div>
              
        </div>
      </section>
    </>
  )
}

export default Home;