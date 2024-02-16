import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinData } from "../utils/api.ts";

export const Price = () => {
  const params = useParams();
  const symbol = params.symbol;

  const [coin, setCoin] = useState<any>(null);

  useEffect(() => {
    const getCoin = async () => {
      if (symbol) {
        const data = await fetchCoinData(symbol);
        setCoin(data);
      }
    };
    getCoin();
  }, [symbol]);

  const loaded = () => {
    if (coin) {
      return (
        <div>
          <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
          </h1>
          <h2>{coin.rate}</h2>
        </div>
      );
    }
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
};
