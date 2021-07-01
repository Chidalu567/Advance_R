import { useState, useEffect } from "react";

//pass a url to a function
//make a fetch request and get json
//pass it to a state value
//return for external use

export const useFetch = (param) => {
  const [product, setProduct] = useState([]); //useState definition
  const getProducts = async (url) => {
    const raw_material = await fetch(url);
    const material = await raw_material.json(); //convert to json
    setProduct(material); //state handler call
  };

  useEffect(() => {
    getProducts(param); //function call
  }, [param]);
  return { product };
};
