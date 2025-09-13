import { Router } from "express";

export const getCoin = Router();

getCoin.get("/", async (_req, res, next) => {
  try {
    const resp = await fetch(
      `https://api.coingecko.com/api/v3/ping?${process.env.COINGECKOAPI}`
    );

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(resp.status).json({ error: text });
    }

    const data = await resp.json();
    res.json(data); // e.g. { "gecko_says": "(V3) To the Moon!" }
  } catch (err) {
    next(err);
  }
});
