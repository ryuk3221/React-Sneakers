import { useState } from "react";
import Card from "../Card/Card";


const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  return (
    <div className="catalog__inner">
      {catalog.map((item) => (
        <Card name={item.name} price={item.price} img={item.img} />
      ))}
    </div>
  );
};

export default Catalog;
