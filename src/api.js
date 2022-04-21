const API_KEY =
  "fa575434bfcac672255e7e5ad96438687134273b5c55f9283f64de384503f6cd";

// URLSearchParams

export const loadTickers = (tickers) => {
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsyms=${tickers.join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) =>
      Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      )
    );
};
