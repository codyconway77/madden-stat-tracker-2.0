import { NextPage } from "next";
import GameForm from "../components/GameForm";
import Nav from "../components/Nav";

const GameInput: NextPage = () => {
    return (
        <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
            <Nav />
            <div className='col-start-1 col-end-13 row-start-1 row-end-12 md:col-start-2 md:col-end-13 flex flex-col justify-center overflow-hidden content-center'>
                <h1 className='text-white text-xl text-center pb-4'>Madden Stat Tracker</h1>
                <div className='col-start-3 col-end-12 place-self-center flex flex-wrap justify-around gap-4 py-4 items-center rounded-2xl w-10/12 h-fit bg-white overflow-y-scroll overhflow-x-hidden'>
                    <GameForm />
                </div>
            </div>
        </div>
    )
} 

export default GameInput