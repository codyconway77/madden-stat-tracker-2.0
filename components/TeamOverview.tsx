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

const TeamOverview: React.FC<ITeamProps> = ({ team }) => {
    const totalWins = team.games.map(gameWinsReducer).filter(win => win).length
    const totalLosses = team.games.map(gameWinsReducer).filter(win => !win).length
    const totalTeamScore = team.games.map(gameScoreReducer).reduce((prev: number, next: number) => prev + next)
    const averageScore = totalTeamScore / team.games.length
    return (
        <div className='bg-stone-300 p-6 shadow-lg focus:shadow-inner hover:shadow-inner hover:shadow-stone-500 shadow-stone-500 rounded-2xl flex flex-col jusitfy-around items-center'>
            <h2 className='text-xl text-white p-2 rounded-lg font-extrabold bg-stone-500 my-1'>{team.name}</h2>
            <p className='text-xl'>{totalWins} - {totalLosses}</p>
            <p className='text-xl'>Total Score: {totalTeamScore}</p>
            <p className='text-xl'>Average Score: {averageScore}</p>
        </div>
    )
}

export default TeamOverview
