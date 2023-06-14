import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="main">
        <section className="catalog">
          <div className="container">
            <div className="catalog__head">
              <h1 className="catalog__title">Все кроссовки</h1>
              <div className="catalog__input">
                <img src="images/icons/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>

            <div className="catalog__inner">
              <Card />
              <div className="catalog__item catalog-item">
                <button className="favorite-btn">
                  <img
                    className="favorite"
                    src="images/icons/item-heart-active.svg"
                    alt=""
                  />
                </button>
                <div className="catalog-item__img-box">
                  <img
                    className="catalog-item__img"
                    src="images/catalog/img1.png"
                    alt="product-img1"
                  />
                </div>
                <h6 className="catalog-item__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h6>
                <div className="catalog-item__footer">
                  <div className="catalog-item__price-box">
                    <span className="catalog-item__price-text">ЦЕНА:</span>
                    <span className="catalog-item__price">12 999 руб.</span>
                  </div>
                  <button className="catalog-item__btn">
                    <img src="images/icons/add.svg" alt="icon" />
                  </button>
                </div>
              </div>

              <div className="catalog__item catalog-item">
                <button className="favorite-btn">
                  <img
                    className="favorite"
                    src="images/icons/item-heart.png"
                    alt=""
                  />
                </button>
                <div className="catalog-item__img-box">
                  <img
                    className="catalog-item__img"
                    src="images/catalog/img2.png"
                    alt="product-img2"
                  />
                </div>
                <h6 className="catalog-item__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h6>
                <div className="catalog-item__footer">
                  <div className="catalog-item__price-box">
                    <span className="catalog-item__price-text">ЦЕНА:</span>
                    <span className="catalog-item__price">12 999 руб.</span>
                  </div>
                  <button className="catalog-item__btn">
                    <img src="images/icons/add.svg" alt="icon" />
                  </button>
                </div>
              </div>

              <div className="catalog__item catalog-item">
                <button className="favorite-btn">
                  <img
                    className="favorite"
                    src="images/icons/item-heart.png"
                    alt=""
                  />
                </button>
                <div className="catalog-item__img-box">
                  <img
                    className="catalog-item__img"
                    src="images/catalog/img3.png"
                    alt="product-img3"
                  />
                </div>
                <h6 className="catalog-item__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h6>
                <div className="catalog-item__footer">
                  <div className="catalog-item__price-box">
                    <span className="catalog-item__price-text">ЦЕНА:</span>
                    <span className="catalog-item__price">12 999 руб.</span>
                  </div>
                  <button className="catalog-item__btn">
                    <img src="images/icons/add.svg" alt="icon" />
                  </button>
                </div>
              </div>

              <div className="catalog__item catalog-item">
                <button className="favorite-btn">
                  <img
                    className="favorite"
                    src="images/icons/item-heart.png"
                    alt=""
                  />
                </button>
                <div className="catalog-item__img-box">
                  <img
                    className="catalog-item__img"
                    src="images/catalog/img4.png"
                    alt="product-img4"
                  />
                </div>
                <h6 className="catalog-item__title">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </h6>
                <div className="catalog-item__footer">
                  <div className="catalog-item__price-box">
                    <span className="catalog-item__price-text">ЦЕНА:</span>
                    <span className="catalog-item__price">12 999 руб.</span>
                  </div>
                  <button className="catalog-item__btn">
                    <img src="images/icons/add.svg" alt="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
