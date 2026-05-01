const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const products = JSON.parse(
  fs.readFileSync(__dirname + "/data/products.json")
);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/order", (req, res) => {
  const order = req.body;
  console.log("NEW ORDER:", order);
  res.json({ message: "Order received!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
