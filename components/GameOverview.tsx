import Link from 'next/link'
import React from 'react'
import { Game } from '../lib/dummyData'

function GameOverview(props: {game: Game, key: number}) {
    return (
        <Link href={`./game/${props.game.id}`} passHref>
            <div className='w-4/6 md:w-2/6 h-28 bg-stone-300 shadow-lg focus:shadow-inner hover:shadow-inner hover:shadow-stone-500 shadow-stone-500 rounded-2xl flex flex-col jusitfy-around items-center'>
                <div className='flex justify-between w-5/6 pt-3'>
                    <div className={`h-12 w-12 rounded-full bg-white flex justify-center items-center ${props.game.win ? 'text-green-500' : 'text-red-500'}`}>{(props.game.win === true) ? 'W' : 'L'}</div><div className='text-xl'>{props.game.opponent}</div>
                </div>
                <div className='w-4/6 flex justify-around'>
                    <div className='text-xl'>
                        {props.game.score} 
                    </div>
                    <div className='text-xl'>
                        -   
                    </div>
                    <div className='text-xl'>
                        {props.game.opponentScore}</div>
                    </div>
            </div>
        </Link>
    )
}

export default GameOverview
