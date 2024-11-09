import { useState, useEffect } from "react";

export default function useMaxProduct(array) {
  const [maxProduct, setMaxProduct] = useState(null);

  useEffect(() => {
    if (array.length < 2) {
      return;
    }

    let largest = 0;
    let secondLargest = 0;
    let product;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
      } else if (array[i] > secondLargest && array[i] !== largest) {
        secondLargest = array[i];
      }
    }
    product = largest * secondLargest;
    setMaxProduct(product);
  }, [array]);

  return maxProduct;
}
