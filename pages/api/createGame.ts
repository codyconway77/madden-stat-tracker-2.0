import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../lib/prismaClient"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body
    console.log(body)
    console.log(body.userId)
    const winOrLoss = (parseInt(body.score) > parseInt(body.oppScore)) ? true : false
    const addToTeam = await prisma.team.upsert({
        where: {
            teamId: {
                userId: body.userId,
                name:body.teamName
            }
        },
        update: {
            
        },
        create: {
            userId: body.userId,
            name: body.teamName
        }
    })
    console.log(addToTeam)
    try {
        const newGame = await prisma.game.create({
            data: {
                userId: body.userId,
                opponent: body.opponent,
                win: winOrLoss,
                teamName: body.teamName,
                oppTeam: body.oppTeam,
                score: parseInt(body.score),
                oppScore: parseInt(body.oppScore),
                passingYards: parseInt(body.passingYards),
                oppPassingYards: parseInt(body.oppPassingYards),
                rushingYards: parseInt(body.rushingYards),
                oppRushingYards: parseInt(body.oppRushingYards),
                passingTds: parseInt(body.passingTds),
                oppPassingTds: parseInt(body.oppPassingTds),
                rushingTds: parseInt(body.rushingTds),
                oppRushingTds: parseInt(body.oppRushingTds),
                interceptions: parseInt(body.interceptions),
                oppInterceptions: parseInt(body.oppInterceptions),
                forcedFumbles: parseInt(body.forcedFumbles),
                oppForcedFumbles: parseInt(body.oppForcedFumbles)
            }
        })
    console.log(newGame)
    res.status(200).json({message: 'New Game succesfully created'})
    } catch (err) {
        console.error(err)
    }
}

export default handler