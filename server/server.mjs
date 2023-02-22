import cors from 'cors';
import express from 'express';
import { getAllNfts } from './controllers/NtfsController.mjs';

import dotenv from 'dotenv';
dotenv.config();

const { DB_PORT } = process.env || 5050;
const app = express();

app.use(cors())
app.use(express.json());

app.get('/api/nft', getAllNfts);

app.listen(DB_PORT, () => {
    console.log(`Server listening on port: ${DB_PORT}`);
});