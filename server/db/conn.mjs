import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const { ATLAS_URI, DBNAME } = process.env;

const connectionString = ATLAS_URI || '';
const client = new MongoClient(connectionString);

let conn;

try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db(DBNAME);

export default db;