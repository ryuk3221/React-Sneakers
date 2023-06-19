import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import { useState, useEffect } from "react";

function App() {
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

    axios.get('https://648b792b17f1536d65eafd99.mockapi.io/cartItems')
      .then(res => {
        setDrawerItems(res.data)
      })

  }, [])

  

  const addToCart = (obj) => {
    axios.post('https://648b792b17f1536d65eafd99.mockapi.io/cartItems', obj);
    setDrawerItems( prev => [...prev, obj]);
  }
  const deleteItemFromCart = (obj) => {
    axios.delete(`https://648b792b17f1536d65eafd99.mockapi.io/cartItems/${obj.id}`);    
    setDrawerItems(drawerItems.filter((item) => item !== obj));
  }
  
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="wrapper">
      {isOpen ? <Drawer onMinus={deleteItemFromCart} items={drawerItems} onClick={() => setOpen(false)} /> : null}
      <Header onClick={() => setOpen(true)} />
      <main className="main">
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
                .map((item) => (
                  <Card onPlus={ addToCart } id={item.id} name={item.name} price={item.price} img={item.img} key={item.name}/>

                ))}
            </div>
           
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
