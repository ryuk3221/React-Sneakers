import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Catalog from "./components/Catalog/Catalog";

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
            <Catalog />
            {/* <div className="catalog__inner">
              <Card />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
