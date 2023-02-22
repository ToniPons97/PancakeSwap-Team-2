const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NftSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  volume: { type: Number, required: true },
  itemCount: { type: Number, required: true },
  banner: { type: String, required: true },
  avatar: { type: String, required: true },
  detail: { type: String, required: true },
});

const Nft = mongoose.model("Nft", NftSchema);

module.exports = Nft;
