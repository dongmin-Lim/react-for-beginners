import { useState } from "react";

function Result({ money, result, price }) {
  const canBuyCoin = () => {
    return money / price;
  };
  return (
    <>
      <h1>{result.name} Information</h1>
      name : {result.name} <p />
      symbol : {result.symbol} <p />
      price(USD) : ${price}
      <p />
      You can buy {canBuyCoin()} {result.name}
    </>
  );
}

export default Result;
