import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const app = express();
const prisma = new PrismaClient()//Conexão com o banco

app.use(express.json())
app.use(cors())

app.get('/ads/:id/discord', async(req, res) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findMany({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })
    return res.json(ad)
})


app.get('/games', async(req, res) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return res.json(games)
})

app.get('/games/:id/ads', async(req, res) => {
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yersPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res.json(ads)
})

app.post('/games/:id/ads', async(req, res) => {
    const gameId = req.params.id;
    const body = req.body;
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yersPlaying: body.yersPlaying,
            discord: body.discord,
            weekDays: body.weekDays,
            hourStart: body.hourStart,
            hourEnd: body.hourEnd,
            useVoiceChannel: body.useVoiceChannel
        }
    })
    return res.status(200).json(ad)
})

app.listen(3000);