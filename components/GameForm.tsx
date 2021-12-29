import React, { FormEventHandler } from 'react'
import TeamSelect from './TeamSelect'

function GameForm() {
    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault()

        const res = await fetch('/api/createGame', {
            body: JSON.stringify({

            }),
            headers: {
                'content-type': 'application/json' 
            },
            method: 'POST'
        })

        const result = await res.json()
    } 
    return (
        <form onSubmit={handleSubmit} className='w-4/6 grid grid-cols-2 gap-5'>
            <div className='col-start-1 col-end-3 flex flex-col'>
                <label htmlFor='opponent' className='text-center'>Opponent</label>
                <input id='opponent' name='opponent' type='text' className='outline-1 outline rounded-md'></input>
            </div>
            <div className='flex flex-col col-start-1 col-end-2'>
                <label htmlFor='team' className='text-center'>Team</label>
                <TeamSelect name="team" />
                <label htmlFor='score' className='text-center'>Score</label>
                <input type='number' id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='passing yards' className='text-center'>Passing Yards</label>
                <input type='number' id='passing yards' name='passing yards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='rushing yards' className='text-center'>Rushing Yards</label>
                <input type='number' id='rushing yards' name='rushing yards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='passing tds' className='text-center'>Passing TDs</label>
                <input type='number' id='passing tds' name='passing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='rushing tds' className='text-center'>Rushing Tds</label>
                <input type='number' id='rushing tds' name='rushing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='forced fumbles' className='text-center'>Forced Fumbles</label>
                <input type='number' id='forced fumbles' name='forced fumbles' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='interceptions' className='text-center'>Interceptions</label>
                <input type='number' id='interceptions' name='interceptions' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <div className='flex flex-col col-start-2 col-end-3'>
                <label htmlFor='opposingTeam' className='text-center'>Opp Team</label>
                <TeamSelect name="opposingTeam" />
                <label htmlFor='opponentScore' className='text-center'>Opp Score</label>
                <input type='number' id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent passing yards' className='text-center'>Opp Pass Yards</label>
                <input type='number' id='opponent passing yards' name='opponent passing yards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent rushing yards' className='text-center'>Opp Rush Yards</label>
                <input type='number' id='opponent rushing yards' name='opponent rushing yards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent passing tds' className='text-center'>Opp Passing TDs</label>
                <input type='number' id='opponent passing tds' name='opponent passing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent rushing tds' className='text-center'>Opp Rushing TDs</label>
                <input type='number' id='opponent rushing tds' name='opponent rushing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent forced fumbles' className='text-center'>Opp FF</label>
                <input type='number' id='opponent forced fumbles' name='opponent forced fumbles' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent interceptions' className='text-center'>Opp Interceptions</label>
                <input type='number' id='opponent interceptions' name='opponent interceptions' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <button type='submit' className='col-start-1 col-end-3 outline outline-stone-700 rounded-md focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700  hover:text-stone-700'>Submit</button>
        </form>
    )
}

export default GameForm
