import Card from "../Card/Card";
import styles from "./Catalog.module.scss";

console.log(styles);
const CatalogItems = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    img: "images/catalog/img1.png",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    img: "images/catalog/img2.png",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    img: "images/catalog/img3.png",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    img: "images/catalog/img4.png",
  },
];

const Catalog = () => {
  return (
    <div className="catalog__inner">
      {CatalogItems.map((item) => (
        <Card
          name={item.name}
          price={item.price}
          img={item.img}
          onClick={() => console.log(item)}
        />
      ))}
    </div>
  );
};

export default Catalog;
