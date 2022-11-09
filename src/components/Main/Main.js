import React, { useEffect, useState } from "react";
import InfoDetails from "../InfoDetails/InfoDetails";
import LeftSideTop from "../LeftSideTop/LeftSideTop";
import Option from "../Option/Option";
import "./Main.css";

const Main = () => {
  const [options, setOptions] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    /* let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart); */
    // addToDb(selectedProduct.id);
  };

  return (
    <div>
      <LeftSideTop></LeftSideTop>
      <div className="main-container">
        <div className="left-container">
          {options.map((option) => (
            <Option
              key={option.id}
              option={option}
              handleAddToCart={handleAddToCart}
            ></Option>
          ))}
        </div>
        <div className="details-container">
          <InfoDetails></InfoDetails>
        </div>
      </div>
    </div>
  );
};

export default Main;
