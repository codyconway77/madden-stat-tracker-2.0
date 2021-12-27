import type { NextPage } from 'next'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
      <Nav />
      <div className='col-start-2 col-end-13 flex flex-col justify-center overflow-hidden content-center'>
        <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
        <div className='col-start-3 col-end-12 place-self-center flex flex-wrap justify-around gap-4 px-4 items-center rounded-2xl w-10/12 h-5/6 bg-white overflow-y-scroll overhflow-x-hidden'>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
          <div className='w-2/6 h-36 bg-stone-300 rounded-2xl'>Im a game</div>
        </div>
      </div>
    </div>
  )
}

export default Home
