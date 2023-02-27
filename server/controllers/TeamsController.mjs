import db from '../db/conn.mjs';

const { TEAMS_COLL } = process.env;
const collection = db.collection(TEAMS_COLL);

// Get a list of 50 NFTs max.
const getAllTeams = async (req, res) => {
    let result = await collection.find({})
        .limit(50)
        .toArray();
        
    res.json(result).status(200);
};

// Get team by id
const getTeamById = async (req, res) => {
    const { id } = req.params;

    let result = await collection.findOne({ id: Number(id) });
    res.json(result).status(200);
}


export {
    getAllTeams,
    getTeamById
}
