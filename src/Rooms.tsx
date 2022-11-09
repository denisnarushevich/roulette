import {Button} from "./Button";
import {Room} from "./Room";
import {useCallback, useState} from "react";

export function Rooms() {
    const [rooms, setRooms] = useState<boolean[]>([]);

    const handleCreate = useCallback(() => {
        setRooms([...rooms, true])
    }, [rooms])

    return <div className="container mx-auto px-6">
        <div className="flex mt-7 gap-5">
            <div className="flex-grow">
                <Button>Choose the room</Button>
            </div>
            <Button color="primary" onClick={handleCreate}>Create room</Button>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {rooms.map((_, i) => <Room key={i}/>)}
        </div>
    </div>
}