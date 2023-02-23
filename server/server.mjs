import cors from 'cors';
import express from 'express';
import { getAllNfts } from './controllers/NtfsController.mjs';
import { getAllTeams } from './controllers/TeamsController.mjs';

import dotenv from 'dotenv';
dotenv.config();

const { DB_PORT } = process.env || 5050;
const app = express();

app.use(cors())
app.use(express.json());

// Get all NFTs
app.get('/api/nft', getAllNfts);

// Get all Teams
app.get('/api/teams', getAllTeams);

app.listen(DB_PORT, () => {
    console.log(`Server listening on port: ${DB_PORT}`);
});