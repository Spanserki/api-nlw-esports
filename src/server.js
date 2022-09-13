import express from "express";

const app = express();

app.listen(3000);

app.get('/ads', (req, res) => {
    return res.json([
        
        {"id": 1, "name": "Guilherme", "idade": 23},
        {"id": 1, "name": "Guilherme", "idade": 23},
        {"id": 1, "name": "Guilherme", "idade": 23},

    ])
})