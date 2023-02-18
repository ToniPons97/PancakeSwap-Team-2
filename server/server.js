const express = require("express");
const { db } = require("./nft_db.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send(db);
});

app.listen("5000", () => console.log("listening on 5000"));
