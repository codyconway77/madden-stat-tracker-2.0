import type { GetServerSideProps, NextPage } from 'next'
import GameOverview from '../components/GameOverview'
import Nav from '../components/Nav'
import { Game } from '@prisma/client'
import { prisma } from '../lib/prismaClient'

interface IGamesProps {
  data: Game[]
}

const Home: NextPage<IGamesProps> = ({ data }) => {
  return (
    <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
      <Nav />
      <div className='col-start-1 col-end-13 row-start-1 row-end-12 md:col-start-2 md:col-end-13 flex flex-col justify-center overflow-hidden content-center'>
        <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
        <div className='col-start-3 col-end-12 place-self-center flex flex-wrap justify-around gap-4 py-4 items-center rounded-2xl w-10/12 h-5/6 bg-white overflow-y-scroll overhflow-x-hidden'>
          {data.map((game: Game, index: number) => {
            return (
            <GameOverview game={game} key={index}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await prisma.game.findMany()
  const data = await res

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
