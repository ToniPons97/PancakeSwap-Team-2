const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  description: { type: String, required: true },
  members: { type: Number, required: true },
  image: { type: String, required: true },
  backgroundImg: { type: String },
});

const Leaderboard = mongoose.model("Leaderboard", LeaderboardSchema);

module.exports = Leaderboard;
