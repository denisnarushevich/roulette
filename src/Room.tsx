import {useEffect, useState} from "react";
import {RoomCard} from "./RoomCard";

export function Room() {
    const [started, setStarted] = useState(false);
    const [winner, setWinner] = useState<string | undefined>()
    const [rouletteState, setRouletteState] = useState({angle: 0, speed: 0});

    useEffect(() => {
        let tid = -1;

        const f = () => {
            setRouletteState(({angle, speed}) => ({
                angle: angle + speed,
                speed: speed > 0.01 ? speed - (speed / 100) : 0
            }));

            tid = setTimeout(f, 16.6) as unknown as number;
        }
        f();

        return () => clearTimeout(tid);
    }, [])

    useEffect(() => {
        if (!started) {
            const tid = setTimeout(() => {
                setRouletteState((state) => ({
                    ...state,
                    speed: 5 + Math.random() * 70
                }));
                setStarted(true);
            }, 5000);
            return () => clearTimeout(tid);
        }
    }, [started, setStarted, setRouletteState])

    useEffect(() => {
        if (winner === undefined && started && rouletteState.speed === 0) {
            setWinner((rouletteState.angle % 359) / 180 >= 1 ? 'blue' : 'red')
        }
    }, [winner, started, rouletteState, setWinner])

    return <RoomCard angle={rouletteState.angle} winner={winner}/>
}