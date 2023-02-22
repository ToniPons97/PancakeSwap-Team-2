import db from '../db/conn.mjs';

const { NFT_COLL } = process.env;
const collection = db.collection(NFT_COLL);

// Get a list of 50 NFTs max.
const getAllNfts = async (req, res) => {
    let result = await collection.find({})
        .limit(50)
        .toArray();

    res.json(result).status(200);
};


export {
    getAllNfts
}
