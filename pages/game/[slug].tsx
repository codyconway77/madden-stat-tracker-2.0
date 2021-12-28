import { NextPage } from "next";
import { useRouter } from "next/router"
import Nav from "../../components/Nav";
import dummyData from "../../lib/dummyData";

const Game: NextPage = () => {
    const { query } = useRouter()
    const slug = parseInt(query.slug as string)
    return (
        <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
            <Nav />
            <div className='col-start-1 col-end-13 row-start-1 row-end-12 md:col-start-2 md:col-end-13 flex flex-col justify-center overflow-hidden content-center'>
                <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
                <div className='col-start-3 col-end-12 place-self-center flex flex-wrap justify-around gap-4 py-4 items-center rounded-2xl w-10/12 h-5/6 bg-white overflow-y-scroll overhflow-x-hidden'>
                    <div className="bg-stone-300 w-4/6 h-4/6 flex flex-col justify-around">
                        <div className="flex justify-around">
                            <div>
                                {dummyData[slug].win ? 'Win' : 'Loss'}
                            </div>
                            <div>
                                {dummyData[slug].opponent}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                {dummyData[slug].team}
                            </div>
                            <div>
                                {dummyData[slug].opposingTeam}
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div>
                                {dummyData[slug].score}
                            </div>
                            <div>
                                {dummyData[slug].opponentScore}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game
