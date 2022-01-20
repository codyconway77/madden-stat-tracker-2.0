import { GetServerSideProps, NextPage } from "next"
import { withSessionSsr } from "../lib/withSession"
import { prisma } from '../lib/prismaClient'
import Nav from "../components/Nav"
import { Team } from "@prisma/client"
import TeamOverview from "../components/TeamOverview"
import { useRouter } from "next/router"


interface ITeamProps {
    data: TeamWithGames[]
}

interface TeamWithGames extends Team {
    games: any
}

const Teams: NextPage<ITeamProps> = ({ data }) => {
    const router = useRouter()
    const logoutHandler = async () => {
        const logout = await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'content-type': 'applicatin/json'
        }, 
        })
        if (logout.ok) {
        router.replace(logout.url)
        }
    }
    return (
        <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
          <Nav />
          <button onClick={logoutHandler} className='fixed top-4 right-4 text-white'>Logout</button>
          <div className='col-start-1 col-end-13 row-start-1 row-end-12 md:row-end-13 md:col-start-2 md:col-end-13 flex flex-col justify-center overflow-hidden content-center'>
            <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
            <div className='col-start-3 col-end-12 row-start-3 row-end-10 place-self-center flex flex-wrap justify-around gap-4 py-4 items-center rounded-2xl w-10/12 h-5/6 bg-white overflow-y-scroll overhflow-x-hidden'>
              {data.map((team: TeamWithGames, key: number) => {
                  return (
                      <TeamOverview key={key} team={team} />    
                  )
              })}
            </div>
          </div>
        </div>
      )
}

export const getServerSideProps: GetServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }): Promise<any> {
      //Check if user exists on session
      const user = req.session.user
  
      // If user does not exist on session, redirect to login
      if (!user) {
        return {
          redirect: {
            destination: '/login'
          }
        }
      }
      // Fetch data from external API
      const res = await prisma.team.findMany({
        where: {
            userId: user.id
        },
        select: {
            name: true,
            games: true
        }
      })
      const data = await res
    
      // Pass data to the page via props
      return { props: { data } }
    }
    
)

export default Teams