import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const Header = () => {
  const totalmoney = useSelector((state) => state.product.value);

  return (
    <div className="header">
      <h1 className="header__title">SPEND MONEY APP</h1>
      <img
        className="header__img"
        src="https://neal.fun/spend/billgates.jpg"
        alt=""
      />
      <div className="header__money">
        <span>${totalmoney}</span>
      </div>
    </div>
  );
};

export default Header;
