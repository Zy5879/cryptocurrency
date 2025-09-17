import { Router } from "express";
import axios from "axios";

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

    const response = await fetch(url, options);

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

getCoin.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": process.env.COINGECKOAPI as string },
      body: undefined,
    };

    const response = await fetch(url, options);

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

getCoin.get("/search", async (req, res) => {
  try {
    const url = "https://api.coingecko.com/api/v3/search";
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": process.env.COINGECKOAPI as string },
    };

    const response = await fetch(url, options);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
});
