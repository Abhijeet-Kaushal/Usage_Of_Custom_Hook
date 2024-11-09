import "./styles.css";
import { useState } from "react";
import useMaxProduct from "./useMaxProduct";

export default function App() {
  const array = [1, 10, 2, 6, 5, 3, -100, -11];
  const maxProduct = useMaxProduct(array);
  return (
    <>
      <h1>Hi</h1>
      <h1>Maximum product of 2 numbers:</h1>
      <h3>{maxProduct !== null ? maxProduct : <p>Calculating..</p>}</h3>
    </>
  );
}
