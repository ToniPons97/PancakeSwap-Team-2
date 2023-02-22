const mongoose = require("mongoose");
const Leaderboard = require("./models/Leaderboard.js");
const Nft = require("./models/Nft.js");
const express = require("express");
const { db } = require("./nft_db.js");
const { teamsData } = require("./leaderboard_db.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/pancake-swap")
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log(e));

// Initial data inserts/////////////
//Nft.insertMany(db);
//Leaderboard.insertMany(teamsData);
//////////////////////////////////////////

//Get Api Data
app.get("/api/nft", async (req, res) => {
  const nfties = await Nft.find();
  res.send(nfties);
});

app.get("/api/leaderboard", async (req, res) => {
  const teams = await Leaderboard.find();
  res.send(teams);
});

///Insert data to the Api

app.post("/api/nft/add", (req, res) => {
  const { id, name, volume, itemCount, banner, avatar, detail } = req.body;
  Nft.create(
    {
      id,
      name,
      volume,
      itemCount,
      banner,
      avatar,
      detail,
    },
    (err, docs) => {
      if (err) {
        res.send({ msg: "Something went wrong", err: err });
      } else {
        res.status(200).send({ msg: "Nft added successfully" });
      }
    }
  );
});

app.post("/api/leaderboard/add", (req, res) => {
  const { id, name, description, members, image, backgroundImg } = req.body;
  Leaderboard.create(
    {
      id,
      name,
      description,
      members,
      image,
      backgroundImg,
    },
    (err, docs) => {
      if (err) {
        res.send({ msg: "Something went wrong", err: err });
      } else {
        res.status(200).send({ msg: "Team added successfully" });
      }
    }
  );
});

app.listen("5000", () => console.log("listening on 5000"));
