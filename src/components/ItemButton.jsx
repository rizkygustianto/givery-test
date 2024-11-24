import React from "react";

const ItemButton = ({ name, price, setOrder, orderQty }) => {
  const handleClick = () => {
    setOrder(name)
  }
  return (
    <div className='row buttonContainer'>
      <button id={name.toLowerCase()} onClick={handleClick} className='itemButton'>{name} - {price} yen</button>
      <div id={name.toLowerCase() + '-count'} className='orderBadge'>{orderQty}</div>
    </div>
  );
};

export default ItemButton;
