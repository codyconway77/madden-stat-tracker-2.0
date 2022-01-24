import { Game, Team } from '@prisma/client'
import React from 'react'

interface ITeamProps {
    team: TeamWithGames
}

interface TeamWithGames extends Team {
    games: Game[]
}

const gameScoreReducer = (game: Game) => game.score

const gameWinsReducer = (game: Game) => game.win

const gameRYardsReducer = (game: Game) => game.rushingYards
const gamePYardsReducer = (game: Game) => game.passingYards

const TeamOverview: React.FC<ITeamProps> = ({ team }) => {
    const totalWins = team.games.map(gameWinsReducer).filter(win => win).length
    const totalLosses = team.games.map(gameWinsReducer).filter(win => !win).length
    const totalTeamScore = team.games.map(gameScoreReducer).reduce((prev: number, next: number) => prev + next)
    const averageScore = totalTeamScore / team.games.length
    const totalYards = team.games.map(gameRYardsReducer).reduce((prev: number, next: number) => prev + next) + team.games.map(gamePYardsReducer).reduce((prev: number, next: number) => prev + next)
    const averageYards = totalYards / team.games.length
    return (
        <div className='bg-stone-300 p-6 shadow-lg focus:shadow-inner hover:shadow-inner hover:shadow-stone-500 shadow-stone-500 rounded-2xl flex flex-col gap-1 jusitfy-around items-center'>
            <h2 className='text-xl text-white p-2 rounded-lg font-extrabold bg-stone-500 my-1'>{team.name}</h2>
            <p className='text-xl font-bold'>{totalWins} - {totalLosses}</p>
            <div className='w-full flex justify-around'>
                <div className='flex flex-col mx-2 justify-around'>
                    <p className='text-xl'>Total Score: {totalTeamScore}</p>
                    <p className='text-xl'>Average Score: {averageScore}</p>
                </div>
                <div className='flex flex-col mx-2 justify-around'>
                    <p className='text-xl'>Total Yards: {totalYards}</p>
                    <p className='text-xl'>Average Yards: {averageYards}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamOverview
