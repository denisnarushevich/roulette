import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Inika&display=swap" rel="stylesheet"/>
            </Head>
            <body className="bg-background-light">
            <Main/>
            <NextScript/>
            </body>
        </Html>
)
}