import Head from 'next/head'
import {Rooms} from "../src/Rooms";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rooms</title>
            </Head>
            <Rooms/>
        </>
    )
}
