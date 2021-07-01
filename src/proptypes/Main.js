import React from "react";
import { useFetch } from "./customHook/useFetch"; //custom hook
import Product from "./compones/Product"; //component

//we collect the json data
//pass the individal property to the component to render each one of them
//we validate our props passed to the component

const Main = () => {
  const { product } = useFetch(
    "https://course-api.com/react-prop-types-example"
  ); //cuction hook call
  console.log(product);
  return (
    <section>
      {product.map((prod) => {
        return (
          <React.Fragment>
            <Product key={prod.id} {...prod} />
          </React.Fragment>
        );
      })}
    </section>
  ); //react jsx
}; //react component definition

export default Main; //export for external file to use
