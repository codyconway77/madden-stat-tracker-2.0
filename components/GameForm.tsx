import React, { FormEventHandler } from 'react'

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
        <form onSubmit={handleSubmit} className='w-4/6 grid grid-cols-2 gap-3'>
            <div className='col-start-1 col-end-3 flex flex-col'>
                <label htmlFor='opponent' className='text-center'>Opponent</label>
                <input id='opponent' name='opponent' type='text' className='outline-1 outline rounded-md'></input>
            </div>
            <div className='flex flex-col col-start-1 col-end-2'>
                <label htmlFor='team' className='text-center'>Team</label>
                <input type='text' id='team' name='team' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='score' className='text-center'>Score</label>
                <input type='number' id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='team' className='text-center'>Passing Yards</label>
                <input type='text' id='team' name='team' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='score' className='text-center'>Rushing Yards</label>
                <input type='number' id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='team' className='text-center'>Passing TDs</label>
                <input type='text' id='team' name='team' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='score' className='text-center'>Rushing Tds</label>
                <input type='number' id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='team' className='text-center'>Forced Fumbles</label>
                <input type='text' id='team' name='team' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='score' className='text-center'>Interceptions</label>
                <input type='number' id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <div className='flex flex-col col-start-2 col-end-3'>
                <label htmlFor='opposingTeam' className='text-center'>Opp Team</label>
                <input type='text' id='opposingTeam' name='opposingTeam' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponentScore' className='text-center'>Opp Score</label>
                <input type='number' id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opposingTeam' className='text-center'>Opp Pass Yards</label>
                <input type='text' id='opposingTeam' name='opposingTeam' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponentScore' className='text-center'>Opp Rush Yards</label>
                <input type='number' id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opposingTeam' className='text-center'>Opp Passing TDs</label>
                <input type='text' id='opposingTeam' name='opposingTeam' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponentScore' className='text-center'>Opp Rushing TDs</label>
                <input type='number' id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opposingTeam' className='text-center'>Opp FF</label>
                <input type='text' id='opposingTeam' name='opposingTeam' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='opponentScore' className='text-center'>Opp Interceptions</label>
                <input type='number' id='opponentScore' name='opponentScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <button type='submit' className='col-start-1 col-end-3 outline outline-stone-700 rounded-md focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700  hover:text-stone-700'>Submit</button>
        </form>
    )
}

export default GameForm
