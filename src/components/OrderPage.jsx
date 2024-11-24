import React from "react";
import { useState } from "react";
import ItemButton from "./ItemButton";
import OrderSummary from "./OrderSummary";

const OrderPage = () => {
  const [coffee, setCoffee] = useState(0);
  const [tea, setTea] = useState(0);
  const [milk, setMilk] = useState(0);
  const [coke, setCoke] = useState(0);
  const [beer, setBeer] = useState(0);

  const itemsMap = {
    coffee: {
      name: "Coffee",
      price: 480,
      orderQty: coffee,
    },
    tea: {
      name: "Tea",
      price: 280,
      orderQty: tea,
    },
    milk: {
      name: "Milk",
      price: 180,
      orderQty: milk,
    },
    coke: {
      name: "Coke",
      price: 190,
      orderQty: coke,
    },
    beer: {
      name: "Beer",
      price: 580,
      orderQty: beer,
    },
  };

  const totalOrder = Object.values(itemsMap).reduce((total, item) => total + item.orderQty, 0);
  const totalPrice = Object.values(itemsMap).reduce((total, item) => total + item.orderQty * item.price, 0);
  
  const setOrder = (name) => {
      if (name === "Coffee") setCoffee(coffee + 1);
      if (name === "Tea") setTea(tea + 1);
      if (name === "Milk") setMilk(milk + 1);
      if (name === "Coke") setCoke(coke + 1);
      if (name === "Beer") setBeer(beer + 1);
    
  };

  return (
    <div className="container">
      <div className="row alignCenter">
        <div className="col">
          {Object.entries(itemsMap).map(([key, value]) => (
            <div key={key}>
              <ItemButton name={value.name} price={value.price} setOrder={setOrder} orderQty={value.orderQty} />
            </div>
          ))}
        </div>

        <OrderSummary totalOrder={totalOrder} totalPrice={totalPrice} />
      </div>


    </div>
  );
};

export default OrderPage;
