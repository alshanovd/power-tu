import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "./Product";

function App() {
  const [data, setData] = React.useState<Product[]>([]);

  const getData = async () => {
    const fetchedData = await fetch("http://13.60.43.60:8000/products/");
    const json = await fetchedData.json();
    setData(json);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getData}>GET Data</button>
        {data.map((p) => (
          <p key={p.product_id}>
            {p.product_id} - {p.name} - {p.price}
          </p>
        ))}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World for <code>Power TU</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
