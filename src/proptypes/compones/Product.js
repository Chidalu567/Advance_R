import React from "react";
import propTypes from "prop-types";

const Product = ({ name, price, image }) => {
  //if image if found the url propoerty must be found also too for it
  //to be true
  const url = image && image.url;
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo38MJ3SyR4-Rgux5t1IfdjnNfrpiW2vdqG2z8S4E6cqId8xqLAbd2KxCBGEgKRldxcex4Aqf&usqp=CAc";
  return (
    <article>
      <img src={url || defaultImage} alt={`This is a ${name}`} />
      <h3>{name}</h3>
      <h5>{price || 3.99}</h5>
    </article>
  );
}; //react component definition

Product.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  image: propTypes.object.isRequired,
};

export default Product; //export for external file to use
