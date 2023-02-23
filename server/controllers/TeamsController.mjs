import db from '../db/conn.mjs';

const { TEAMS_COLL } = process.env;
const collection = db.collection(TEAMS_COLL);

const getAllTeams = async (req, res) => {
    let result = collection.find({})
        .limit(50)
        .toArray()
    
    res.json(result).status(200);
}

export {
    getAllTeams
}