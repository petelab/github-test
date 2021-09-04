import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
  const { items } = props;

  useEffect(() => {
    console.log(items);
  }, []);
  return (
    <>
      <h1>Items</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Items;
