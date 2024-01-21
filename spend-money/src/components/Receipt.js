import React from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const productItems = useSelector((state) => state.product.items);

  // Alışveriş yapılan ürünler
  const cartItems = productItems.filter((item) => item.count > 0);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.productPrice * cartItem.count;
  }, 0);

  if (totalPrice == 5000000) {
    alert("You are a big spender!!!");
  }

  return (
    <div className="receipt">
      <h1 className="receipt__title">Your Receipt</h1>
      <table className="receipt__table">
        {cartItems.map((cartItem) => (
          <tr className="receipt__table__row" key={cartItem.id}>
            <td className="receipt__table__row__column">
              {cartItem.productName}
            </td>
            <td className="receipt__table__row__column">x{cartItem.count}</td>
            <td className="receipt__table__row__column">
              ${cartItem.productPrice * cartItem.count}
            </td>
          </tr>
        ))}
      </table>
      <div className="price">
        <h2>Total</h2>
        <h3>${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Receipt;
