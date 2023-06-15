import Card from "../Card/Card";
import styles from "./Catalog.module.scss";

console.log(styles);
const CatalogItems = [
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "img": "images/catalog/img1.png"
  },
  {
    "name": "Мужские Кроссовки Nike Air Max 270",
    "price": 12999,
    "img": "images/catalog/img2.png"
  },
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "img": "images/catalog/img3.png"
  },
  {
    "name": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "img": "images/catalog/img4.png"
  },
  {
    "name": "Мужские Кроссовки Under Armour Curry 8",
    "price": 15199,
    "img": "images/catalog/img5.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Kyrie 7",
    "price": 11299,
    "img": "images/catalog/img6.jpg"
  },
  {
    "name": "Мужские Кроссовки Jordan Air Jordan 11",
    "price": 11799,
    "img": "images/catalog/img7.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike LeBron XVIII",
    "price": 16499,
    "img": "images/catalog/img8.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Lebron XVIII Low",
    "price": 13999,
    "img": "images/catalog/img9.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "img": "images/catalog/img10.jpg"
  },
  {
    "name": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "img": "images/catalog/img11.jpg"
  },
  {
    "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "price": 11299,
    "img": "images/catalog/img12.jpg"
  }
];

const Catalog = () => {
  return (
    <div className="catalog__inner">
      {CatalogItems.map((item) => (
        <Card name={item.name} price={item.price} img={item.img} />
      ))}
    </div>
  );
};

export default Catalog;
