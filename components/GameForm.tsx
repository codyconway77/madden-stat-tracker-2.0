import React, { FormEventHandler } from 'react'
import TeamSelect from './TeamSelect'

const GameForm: React.FC = () => {
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
        <form onSubmit={handleSubmit} className='w-full mt-[-2] md:w-5/6 lg:w-4/6 grid grid-cols-2 p-2 md:p-4 gap-4 ring-2 ring-red-700'>
            <div className='col-start-1 col-end-3 flex flex-col'>
                <label htmlFor='opponent' className='text-center'>Opponent</label>
                <input id='opponent' name='opponent' type='text' required className='outline-1 outline rounded-md text-center'></input>
            </div>
            <div className='flex flex-col col-start-1 col-end-2'>
                <label htmlFor='team' className='text-center'>Team</label>
                <TeamSelect name="team" leftRight='right'/>
                <label htmlFor='score' className='text-center'>Score</label>
                <input type='number' min={0} id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='passing yards' className='text-center'>Passing Yards</label>
                <input type='number' min={0} id='passing yards' name='passing yards' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='rushing yards' className='text-center'>Rushing Yards</label>
                <input type='number' min={0} id='rushing yards' name='rushing yards' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='passing tds' className='text-center'>Passing TDs</label>
                <input type='number' min={0} id='passing tds' name='passing tds' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='rushing tds' className='text-center'>Rushing Tds</label>
                <input type='number' min={0} id='rushing tds' name='rushing tds' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='forced fumbles' className='text-center'>Forced Fumbles</label>
                <input type='number' min={0} id='forced fumbles' name='forced fumbles' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='interceptions' className='text-center'>Interceptions</label>
                <input type='number' min={0} id='interceptions' name='interceptions' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
            </div>
            <div className='flex flex-col col-start-2 col-end-3'>
                <label htmlFor='opposingTeam' className='text-center'>Opp Team</label>
                <TeamSelect name="opposingTeam" leftRight='left' />
                <label htmlFor='opponentScore' className='text-center'>Opp Score</label>
                <input type='number' min={0} id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent passing yards' className='text-center'>Opp Pass Yards</label>
                <input type='number' min={0} id='opponent passing yards' name='opponent passing yards' required autoComplete='off' className='outline-1 outline rounded-md required:border-red-500'/>
                <label htmlFor='opponent rushing yards' className='text-center'>Opp Rush Yards</label>
                <input type='number' min={0} id='opponent rushing yards' name='opponent rushing yards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent passing tds' className='text-center'>Opp Pass TDs</label>
                <input type='number' min={0} id='opponent passing tds' name='opponent passing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent rushing tds' className='text-center'>Opp Rush TDs</label>
                <input type='number' min={0} id='opponent rushing tds' name='opponent rushing tds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent forced fumbles' className='text-center'>Opp FF</label>
                <input type='number' min={0} id='opponent forced fumbles' name='opponent forced fumbles' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponent interceptions' className='text-center'>Opp INTs</label>
                <input type='number' min={0} id='opponent interceptions' name='opponent interceptions' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <button type='submit' className='col-start-1 col-end-3 outline p-1 outline-stone-700 rounded-md hover:bg-stone-500 hover:text0w focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700 hover:font-semibold  hover:text-white'>Submit</button>
        </form>
    )
}

export default GameForm
