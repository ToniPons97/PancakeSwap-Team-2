import db from '../db/conn.mjs';

const { TEAMS_COLL } = process.env;
const collection = db.collection(TEAMS_COLL);

console.log(TEAMS_COLL);
console.log(collection);

const getAllTeams = async (req, res) => {
    let result = collection.find({})
        .limit(10)
        .toArray()
    
    res.json(result).status(200);
}

export {
    getAllTeams
}