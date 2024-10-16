import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  var singleprod = useLocation();
  let MyProd = singleprod.state.data;

  return (
    <div id="product-page">
      <h2>{MyProd.title}</h2><br />
      <img src={MyProd.image} alt={MyProd.title} />
      <p>Price:  ${MyProd.price}</p><br />
      <button style={{padding:"5px", width:"100px",backgroundColor:"orange", color:"white"}}>Buy Now</button>
    </div>
  );
};

export default ProductPage;
