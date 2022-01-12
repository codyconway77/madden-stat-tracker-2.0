import { useRouter } from 'next/router'
import React, { FormEventHandler, useState } from 'react'
import TeamSelect from './TeamSelect'

type GameFormProps = { id: number}

const GameForm: React.FC<GameFormProps> = ({ id }) => {
    const [formData, setFormData] = useState({})
    const router = useRouter()
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(formData)
    }
    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault()
        const res = await fetch('/api/createGame', {
            body: JSON.stringify({
                ...formData,
                userId: id
            }),
            headers: {
                'content-type': 'application/json' 
            },
            method: 'POST'
        })
        if (res.ok) {
            router.push('/')
        }
    } 
    return (
        <form onSubmit={handleSubmit} className='w-full mt-[-2] md:w-5/6 lg:w-4/6 grid grid-cols-2 p-2 md:p-4 gap-4'>
            <div className='col-start-1 col-end-3 flex flex-col'>
                <label htmlFor='opponent' className='text-center'>Opponent</label>
                <input onChange={inputHandler} id='opponent' name='opponent' type='text' required className='outline-1 outline rounded-md text-center'></input>
            </div>
            <div className='flex flex-col col-start-1 col-end-2'>
                <label htmlFor='teamName' className='text-center'>Team</label>
                <TeamSelect onChange={inputHandler} name="teamName" leftRight='right'/>
                <label htmlFor='score' className='text-center'>Score</label>
                <input onChange={inputHandler} type='number' min={0} id='score' name='score' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='passingYards' className='text-center'>Passing Yards</label>
                <input onChange={inputHandler} type='number' min={0} id='passingYards' name='passingYards' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='rushingYards' className='text-center'>Rushing Yards</label>
                <input onChange={inputHandler} type='number' min={0} id='rushingYards' name='rushingYards' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='passingTds' className='text-center'>Passing TDs</label>
                <input onChange={inputHandler} type='number' min={0} id='passingTds' name='passingTds' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='rushingTds' className='text-center'>Rushing TDs</label>
                <input onChange={inputHandler} type='number' min={0} id='rushingTds' name='rushingTds' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='forcedFumbles' className='text-center'>Forced Fumbles</label>
                <input onChange={inputHandler} type='number' min={0} id='forcedFumbles' name='forcedFumbles' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
                <label htmlFor='interceptions' className='text-center'>Interceptions</label>
                <input onChange={inputHandler} type='number' min={0} id='interceptions' name='interceptions' required autoComplete='off' className='outline-1 outline rounded-md text-right'/>
            </div>
            <div className='flex flex-col col-start-2 col-end-3'>
                <label htmlFor='oppTeam' className='text-center'>Opp Team</label>
                <TeamSelect onChange={inputHandler} name="oppTeam" leftRight='left' />
                <label htmlFor='oppScore' className='text-center'>Opp Score</label>
                <input onChange={inputHandler} type='number' min={0} id='oppScore' name='oppScore' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='oppPassingYards' className='text-center'>Opp Pass Yards</label>
                <input onChange={inputHandler} type='number' min={0} id='oppPassingYards' name='oppPassingYards' required autoComplete='off' className='outline-1 outline rounded-md required:border-red-500'/>
                <label htmlFor='oppRushingYards' className='text-center'>Opp Rush Yards</label>
                <input onChange={inputHandler} type='number' min={0} id='oppRushingYards' name='oppRushingYards' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='oppPassingTds' className='text-center'>Opp Pass TDs</label>
                <input onChange={inputHandler} type='number' min={0} id='oppPassingTds' name='oppPassingTds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='oppRushingTds' className='text-center'>Opp Rush TDs</label>
                <input onChange={inputHandler} type='number' min={0} id='oppRushingTds' name='oppRushingTds' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='oppForcedFumbles' className='text-center'>Opp FF</label>
                <input onChange={inputHandler} type='number' min={0} id='oppForcedFumbles' name='oppForcedFumbles' required autoComplete='off' className='outline-1 outline rounded-md'/>
                <label htmlFor='oppInterceptions' className='text-center'>Opp INTs</label>
                <input onChange={inputHandler} type='number' min={0} id='oppInterceptions' name='oppInterceptions' required autoComplete='off' className='outline-1 outline rounded-md'/>
            </div>
            <button type='submit' className='col-start-1 col-end-3 outline p-1 outline-stone-700 rounded-md hover:bg-stone-500 hover:text0w focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700 hover:font-semibold  hover:text-white'>Submit</button>
        </form>
    )
}

export default GameForm
