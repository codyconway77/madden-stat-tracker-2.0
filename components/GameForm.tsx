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
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3'>
            <div className='col-start-1 col-end-3 flex flex-col'>
                <label htmlFor='opponent' className='text-center'>Opponent</label>
                <input id='opponent' name='opponent' type='text' className='outline-1 outline rounded-md'></input>
            </div>
            <div className='flex flex-col col-start-1 col-end-2'>
                <label className='text-center' htmlFor='team'>Team</label>
                <input className='outline-1 outline rounded-md' type='text' id='team' name='team' required/>
                <label className='text-center' htmlFor='score'>Score</label>
                <input className='outline-1 outline rounded-md' type='number' id='score' name='score' required/>
            </div>
            <div className='flex flex-col col-start-2 col-end-3'>
                <label className='text-center' htmlFor='opposingTeam'>Opposing Team</label>
                <input className='outline-1 outline rounded-md' type='text' id='opposingTeam' name='opposingTeam' required/>
                <label className='text-center' htmlFor='opponentScore'>Opponent Score</label>
                <input className='outline-1 outline rounded-md' type='number' id='opponentScore' name='opponentScore' required/>
            </div>
            <button type='submit' className='col-start-1 col-end-3 outline outline-stone-700 rounded-md focus:bg-stone-500 focus:text-white hover:bg-stone-500 hover:text-white'>Submit</button>
        </form>
    )
}

export default GameForm
