import React from "react";
import { Hello } from "./components/hello";
import { ShowTable } from "./components/table";
import { Product } from "./components/product";
import { Select } from "./components/select";

function App() {
  
  let cities = [
    {id: 1, name: "Kyiv", image: "kyiv.jpg"},
    {id: 2, name: "Lviv", image: "Lviv.jpg"},
    {id: 3, name: "Zhytomr", image: "Zhytomr.jpg"},
  ]

  return (
    <React.StrictMode>
      <Hello/>
      <br/>
      <ShowTable/>
      <br/>
      <Product name = 'apple' price = {5} />
      <br/>
      <Select items = {cities}/>
    </React.StrictMode>
  );
}

export default App;
