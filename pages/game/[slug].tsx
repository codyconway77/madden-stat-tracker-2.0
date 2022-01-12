import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router"
import Nav from "../../components/Nav";
import { prisma } from '../../lib/prismaClient'
import dummyData from "../../lib/dummyData";
import { Game } from "@prisma/client";

interface IGameProps {
    game: Game
}

const Game: NextPage<IGameProps> = ({ game }) => {
    // const { query } = useRouter()
    // const slug = parseInt(query.slug as string) - 1
    return (
        <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
            <Nav />
            <div className='col-start-1 col-end-13 row-start-1 row-end-12 md:col-start-2 md:col-end-13 flex flex-col justify-center overflow-hidden content-center h-full'>
                <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
                <div className='col-start-3 col-end-12 place-self-center flex flex-wrap justify-around gap-4 py-4 items-center rounded-2xl w-10/12 h-5/6 bg-white overflow-y-scroll overhflow-x-hidden'>
                    <div className="bg-stone-300 shadow-lg shadow-stone-500 w-5/6 h-5/6 flex flex-col justify-around text-md sm:text-lg md:text-xl">
                        <div className="flex justify-around">
                            <div className={`w-16 h-16 rounded-full bg-white flex justify-center items-center ${game.win ? 'text-green-500' : 'text-red-500'}`}>
                                {game.win ? 'Win' : 'Loss'}
                            </div>
                            <div className="pt-8 text-bold">
                                Opponent: {game.opponent}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Team: {game.teamName}
                            </div>
                            <div>
                                Team: {game.oppTeam}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Score: {game.score}
                            </div>
                            <div>
                                Score: {game.oppScore}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Passing Yards: {game.passingYards}
                            </div>
                            <div>
                                Passing Yards: {game.oppPassingYards}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Rushing Yards: {game.rushingYards}
                            </div>
                            <div>
                                Rushing Yards: {game.oppRushingYards}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Passing TDs: {game.passingTds}
                            </div>
                            <div>
                                Passing TDs: {game.oppPassingTds}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Rushing TDs: {game.rushingTds}
                            </div>
                            <div>
                                Rushing TDs: {game.oppRushingTds}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Forced Fumbles: {game.forcedFumbles}
                            </div>
                            <div>
                                Forced Fumbles: {game.oppForcedFumbles}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                Interceptions: {game.interceptions}
                            </div>
                            <div>
                                Interceptions: {game.oppInterceptions}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const game = await prisma.game.findUnique({
        where: { id: parseInt(query.slug as string)}
    })
    return {props: { game }}
}

export default Game
