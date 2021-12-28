import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <div className='col-start-1 col-end-13 row-start-12 row-end-13 md:col-start-1 md:col-end-2 flex md:flex-col justify-around items-center bg-stone-700 md:h-full'>
            <Link href='/' passHref>
                <div className='text-center text-white text-xl lg:text-2xl cursor-pointer'>Games</div> 
            </Link>
           <div className='rounded-full bg-white w-16 h-16 text-4xl md:text-5xl lg:w-24 lg:h-24 lg:text-6xl xl:w-28 xl:h-28 flex justify-center items-center'>+</div> 
           <div className='text-center text-white text-xl lg:text-2xl'>Teams</div> 
        </div>
    )
}

export default Nav
