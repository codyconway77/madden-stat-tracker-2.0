import { AppProps } from "next/app"

const TeamSelect: React.FC<{ name: string, leftRight: string }> = (props: { name: string , leftRight: string }) => {
    return (
        <>
            <select required name={props.name} id={props.name} className={`outline-1 outline rounded-md text-${props.leftRight}`}>
                <option value="49ers">49ers</option>
                <option value="Bears">Bears</option>
                <option value="Bengals">Bengals</option>
                <option value="Bills">Bills</option>
                <option value="Broncos">Broncos</option>
                <option value="Browns">Browns</option>
                <option value="Bucanners">Bucaneers</option>
                <option value="Cardinals">Cardinals</option>
                <option value="Chargers">Chargers</option>
                <option value="Cheifs">Cheifs</option>
                <option value="Colts">Colts</option>
                <option value="Cowboys">Cowboys</option>
                <option value="Dolphins">Dolphins</option>
                <option value="Eagles">Eagles</option>
                <option value="Falcons">Falcons</option>
                <option value="Football Team">Football Team</option>
                <option value="Giants">Giants</option>
                <option value="Jaguars">Jaguars</option>
                <option value="Jets">Jets</option>
                <option value="Lions">Lions</option>
                <option value="Packers">Packers</option>
                <option value="Panthers">Panthers</option>
                <option value="Patriots">Patriots</option>
                <option value="Raiders">Raiders</option>
                <option value="Rams">Rams</option>
                <option value="Ravens">Ravens</option>
                <option value="Saints">Saints</option>
                <option value="Seahawks">Seahawks</option>
                <option value="Steelers">Steelers</option>
                <option value="Texans">Texans</option>
                <option value="Titans">Titans</option>
                <option value="Vikings">Vikings</option>
            </select>    
        </>
    )
}

export default TeamSelect
