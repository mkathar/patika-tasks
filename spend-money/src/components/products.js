import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementInputValue, decrementInputValue } from "../redux/store";

const Products = () => {
  const productItems = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const totalMoney = useSelector((state) => state.product.value);

  const handleBuyClick = (itemId) => {
    // eğer zarara girecekse satiş yapamasin

    if (
      productItems.find((item) => item.id === itemId).productPrice <= totalMoney
    ) {
      dispatch(incrementInputValue({ itemId }));

      console.log(productItems);
    }
  };
  const handleSellClick = (itemId) => {
    //eğer input değeri 0'dan büyükse azalt.
    if (productItems.find((item) => item.id === itemId).count > 0) {
      dispatch(decrementInputValue({ itemId }));

      console.log(productItems);
    }
  };

  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="products__group" key={productItem.id}>
          <img
            src={productItem.image}
            alt="alt"
            className="products__group__img"
          />
          <h1>{productItem.productName}</h1>
          <h3>${productItem.productPrice}</h3>
          <div className="products__group__box">
            <button
              className="products__group__box__sell"
              disabled={productItem.count > 0 ? false : true}
              onClick={() => handleSellClick(productItem.id)}
            >
              Sell
            </button>
            <input
              className="products__group__box__input"
              type="text"
              value={productItem.count}
              readOnly
              onChange={(e) => e.target.value}
            />
            <button
              className="products__group__box__buy"
              onClick={() => handleBuyClick(productItem.id)}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
