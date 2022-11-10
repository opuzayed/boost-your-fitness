import React, { useEffect, useState } from "react";
import InfoDetails from "../InfoDetails/InfoDetails";
import LeftSideTop from "../LeftSideTop/LeftSideTop";
import Option from "../Option/Option";
import "./Main.css";
import Accordion from "react-bootstrap/Accordion";

const Main = () => {
  const [options, setOptions] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  const handleAddTime = (selectedProduct) => {
    //console.log(selectedProduct);
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
      <div className="container-fluid bg-secondary">
        <div className="row">
          <div className="col-md-8 col-12">
            <LeftSideTop></LeftSideTop>
            <div className="left-container">
              {options.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  handleAddTime={handleAddTime}
                ></Option>
              ))}
            </div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How does react works?</Accordion.Header>
                <Accordion.Body>
                  React uses a declarative paradigm that makes it easier our
                  application and aims to be both efficient and flexible. It
                  designs simple views for each state in our application, and
                  React will efficiently update and render just the right
                  component when your data changes. The declarative view makes
                  code more predictable and easier to debug.A React application
                  is made of multiple components, each responsible for rendering
                  a small, reusable piece of HTML. Components can be nested
                  within other components to allow complex applications to be
                  built out of simple building blocks. A component may also
                  maintain an internal state.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Difference between props and state?
                </Accordion.Header>
                <Accordion.Body>
                  State is referred to the local state of the component which
                  cannot be accessed and modified outside of the component and
                  only can be used & modified inside the component. Props, on
                  the other hand,make components reusable by giving components
                  the ability to receive data from the parent component in the
                  form of props.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                What types of work useEffect do except data loading?
                </Accordion.Header>
                <Accordion.Body>
                1.Running on state change: validating input field.
                2.Running on state change: live filtering
                3.Running on state change: trigger animation on new array value.
                4.Running on props change: update paragraph list on fetched API data update.
                5.Running on props change: updating fetched API data to get BTC updated price
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-4 col-12">
            <div className="mt-5 details-container">
              <InfoDetails time={time}></InfoDetails>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
