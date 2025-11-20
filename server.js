const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quotex Signal Server is running...");
});

// Simple random signal generator
app.get("/signal", (req, res) => {
  const signals = ["CALL", "PUT"];
  const random = signals[Math.floor(Math.random() * signals.length)];

  res.json({
    signal: random,
    time: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
