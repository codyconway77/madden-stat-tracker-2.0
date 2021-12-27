import React from 'react'

function Nav() {
    return (
        <div className='col-start-1 col-end-2 flex flex-col justify-around items-center bg-stone-700 h-full'>
           <div className='text-center text-white text-2xl'>Games</div> 
           <div className='rounded-full bg-white w-24 h-24 text-4xl flex justify-center items-center'>+</div> 
           <div className='text-center text-white text-2xl'>Teams</div> 
        </div>
    )
}

export default Nav
