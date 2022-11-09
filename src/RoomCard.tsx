import {Roulette} from "./Roulette";
import classNames from "classnames";

export function RoomCard({winner, angle}:{
    winner?: string,
    angle: number
}) {
    return <div className="bg-background-normal pb-1.5">
        <div className="mt-6 flex justify-center">
            <div className="w-1/2 relative">
                <Roulette angle={angle}/>
                <div
                    className={classNames("opacity-0 absolute inset-0 flex items-center justify-center font-bold font-text transition-opacity", {
                        'text-player1-normal': winner === 'blue',
                        'text-player2-normal': winner === 'red',
                        'opacity-100': winner
                    })}>Winner is {winner}!
                </div>
            </div>
        </div>
        <div
            className="mt-6 flex items-center justify-center gap-4 text-3xs font-text2 leading-4 text-background-contrastText">
            <div className="w-1/3 flex items-center gap-1">
                <div className="w-1 h-5 bg-player1-normal rounded-full"></div>
                <div className="text-2xs font-text leading-4 bg-background-dark px-1 flex-grow">Blue</div>
            </div>
            vs
            <div className="w-1/3 flex items-center gap-1">
                <div className="w-1 h-5 bg-player2-normal rounded-full"></div>
                <div className="text-2xs font-text leading-4 bg-background-dark px-1 flex-grow">Red</div>
            </div>
        </div>
    </div>
}