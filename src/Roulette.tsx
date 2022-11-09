import {ArrowDownIcon} from "./icons/ArrowDownIcon";
import classNames from "classnames";

export function Roulette({angle}: { angle: number }) {
    const _angle = angle % 359;

    return (
        <div className="rounded-full overflow-hidden relative pb-[100%]">
            <div className='flex w-full h-full justify-items-stretch absolute inset-0' style={{
                transform: `rotate(${_angle}deg)`
            }}>
                <div className="bg-player1-normal flex-grow"></div>
                <div className="w-1"></div>
                <div className="bg-player2-normal flex-grow"></div>
            </div>
            <div className="absolute inset-0 rounded-full bg-background-normal m-1">
                <ArrowDownIcon className={classNames('w-5 h-5 absolute top-3/4 left-1/2 -m-2.5 transition-colors', {
                    'text-player1-normal': _angle / 180 >= 1,
                    'text-player2-normal': _angle / 180 < 1
                })}/>
            </div>
        </div>
    );
}