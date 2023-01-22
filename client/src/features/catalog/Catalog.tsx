import { useState, useEffect } from "react";
import { Product } from "../../app/models/products"
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products}/>
    </>
  )
}