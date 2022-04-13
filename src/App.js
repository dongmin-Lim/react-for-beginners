import { useState } from "react";
import Result from "./Result";

function App() {
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();
  const [result, setResult] = useState([]);
  const [price, setPrice] = useState(0);
  fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((result) => setCoins(result));

  const onChangeMoney = (event) => {
    setMoney(event.target.value);
  };

  const getCoinMoney = (event) => {
    const coin = JSON.parse(event.target.value);
    setResult(coin);
    setPrice(coin.quotes.USD.price);
  };

  return (
    <>
      <select onChange={getCoinMoney}>
        <option>choose coin...</option>
        {coins.map((coin) => (
          <option value={JSON.stringify(coin)}>
            {coin.name} ({coin.symbol})
          </option>
        ))}
      </select>
      <p />$<input placeholder="Write your money..." value={money} onChange={onChangeMoney}></input>
      <Result money={money} result={result} price={price} />
      <p />
    </>
  );
}
export default App;
