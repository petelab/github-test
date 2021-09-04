import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Items from "./Items";
import ItemDetail from "./ItemDetail";
import data from "./data.js";
function App() {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("lorem") || "";
  });
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(() => data);
  const handleGet = async () => {
    setLoading(true);
    const response = await fetch(
      `https://baconipsum.com/api/?type=meat-and-filler&paras=1`
    );
    const data = await response.json();
    const [first] = data;

    setValue(first);
    console.log(first);
    setLoading(false);
  };
  const handleClear = () => {
    setValue("");
  };
  const showDetail = (id) => {
    console.log(id);
    const b = items.find((item) => item.id === Number.parseInt(id, 10));
    return b;
  };
  useEffect(() => {
    localStorage.setItem("lorem", value);
  }, [value]);
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/items">Items</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>Hello there</h1>
            <div className="box">
              {value !== "" ? <p>{value}</p> : <p>no value</p>}
            </div>
            <button onClick={handleGet} disabled={loading}>
              click
            </button>
            <button onClick={handleClear}>Clear Local Storage</button>
          </Route>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route exact path="/items">
            <Items items={items} />
          </Route>
          <Route path="/items/:id">
            <ItemDetail onShowDetail={showDetail} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
