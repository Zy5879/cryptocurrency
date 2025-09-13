import { Router } from "express";

export const getCoin = Router();

getCoin.get("/", async (_req, res) => {
  try {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": process.env.COINGECKOAPI as string },
      body: undefined,
    };

    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      options
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
