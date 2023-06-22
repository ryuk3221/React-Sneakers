import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";



export const AppContext = createContext({});


function App() {
  const [isOpen, setOpen] = useState(false);
  const [drawerItems, setDrawerItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [catalog, setCatalog] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoadingCatalog, setLoadingCatalog] = useState(true);
  

  useEffect(() => { 
    //Функция отправляет запросы на бэк, для получения данных каталога и корзины
    
    async function fetchData() {
      const drawerItemsResponse = await axios.get("https://648b792b17f1536d65eafd99.mockapi.io/cartItems");
      setDrawerItems(drawerItemsResponse.data);
      const catalogResponse = await axios.get("https://648b792b17f1536d65eafd99.mockapi.io/catalog");
      setCatalog(catalogResponse.data);
      setLoadingCatalog(false);
    }

    fetchData();
  }, []);

  const onFavorite = (obj) => {
    setFavoriteItems((prev) => [...prev, obj]);
  };

  const addToCart = async (obj) => {
    if (drawerItems.find(item => item.name === obj.name)) {
      setDrawerItems((prev) => prev.filter(item => item.name !== obj.name));
      axios.delete(`https://648b792b17f1536d65eafd99.mockapi.io/cartItems/${obj.id}`)
    } else {
      const cartItem = await axios.post("https://648b792b17f1536d65eafd99.mockapi.io/cartItems", obj);
      setDrawerItems((prev) => [...prev, cartItem.data]);
    }
    // const cartItem = await axios.post(
    //   "https://648b792b17f1536d65eafd99.mockapi.io/cartItems",
    //   obj
    // );
    // setDrawerItems((prev) => [...prev, cartItem.data]);
  };

  const deleteItemFromCart = (obj) => {
    setDrawerItems(drawerItems.filter((item) => item !== obj));
    axios
      .delete(`https://648b792b17f1536d65eafd99.mockapi.io/cartItems/${obj.id}`)
      .catch((err) => {
        alert("Не удалость подключиться к базе данных");
      });
  };

  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const isItemAddedToCart = (name) => {
    return drawerItems.some((obj) => obj.name === name)
  }

  const renderItems = (catalog) => {
    return (
      isLoadingCatalog
        ? [...Array(10)]
        : catalog.filter((item) =>item.name.toUpperCase().includes(inputValue.toUpperCase()))
        .map((item, index) => (
          <Card
            onFavorite={onFavorite}
            onPlus={addToCart}
            id={String(index + 1)}
            name={item.name}
            price={item.price}
            img={item.img}
            key={`${item.price}${index}`}
            drawerItems={drawerItems}
            loading={isLoadingCatalog}
          />
        ))
      
    )
  }
  return (
    <AppContext.Provider value={{catalog, drawerItems, isItemAddedToCart, setDrawerItems}}>
      <div className="wrapper">
      {isOpen ? (
        <Drawer
          onMinus={deleteItemFromCart}
          items={drawerItems}
          onClick={() => setOpen(false)}
        />
      ) : null}

      <Header onClick={() => setOpen(true)} quany={drawerItems.length} />
      {/* <Routes>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <section className="catalog">
        <div className="container">
          <div className="catalog__head">
            <h1 className="catalog__title">
              {inputValue
                ? "Поиск по запросу : " + inputValue
                : "Все кроссовки"}
            </h1>
            <div className="catalog__input">
              <img src="images/icons/search.svg" alt="Search" />
              <input
                onChange={getInputValue}
                value={inputValue}
                type="text"
                placeholder="Поиск..."
              />
            </div>
          </div>
          <div className="catalog__inner">
            {
              renderItems(catalog)
            }
          </div>
        </div>
      </section>
    </div>
    </AppContext.Provider>
  );
}

export default App;
