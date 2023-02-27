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

// Get NFT by id
const getNftById = async (req, res) => {
    const { id } = req.params;
    let result = await collection.findOne({id: Number(id)});
    res.json(result).status(200);
}


export {
    getAllNfts,
    getNftById
}
