import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient()//Conexão com o banco

app.get('/ads', (req, res) => {
    return res.json([])
})

app.post('/ads', (req, res) => {
    return res.status(201).json([])
})

app.get('/games', (req, res) => {

    return res.json([
        
        {"id": 1, "name": "Guilherme", "idade": 23},
        {"id": 2, "name": "Guilherme", "idade": 23},
        {"id": 3, "name": "Guilherme", "idade": 23},
        {"id": 4, "name": "Guilherme", "idade": 23},
    ])
})

app.get('/ads/:id/discord', (req, res) => {
    return res.json([])
})

app.listen(3000);