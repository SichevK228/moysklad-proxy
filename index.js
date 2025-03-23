const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

// Разрешаем CORS
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://api.moysklad.ru/api/remap/1.2/report/stock/all", {
      headers: {
        "Authorization": "Bearer 1592996cb8f8e0bd4cb0a416faa7f0422ce84485",
        "Content-Type": "application/json"
      }
    });

    // Кросс-доменное разрешение
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`✅ Прокси-сервер запущен на порту ${port}`);
});
