import cors from 'cors';
import express from 'express';
import { getAllNfts, getNftById } from './controllers/NtfsController.mjs';
import { getAllTeams, getTeamById } from './controllers/TeamsController.mjs';

import dotenv from 'dotenv';
dotenv.config();

const { DB_PORT } = process.env || 5050;
const app = express();

app.use(cors())
app.use(express.json());


// Get all NFTs
app.get('/api/nft', getAllNfts);

// Get NFT by id
app.get('/api/nft/:id', getNftById);

// Get all Teams
app.get('/api/team', getAllTeams);

// Get team by id
app.get('/api/team/:id', getTeamById);

app.listen(DB_PORT, () => {
    console.log(`Server listening on port: ${DB_PORT}`);
});