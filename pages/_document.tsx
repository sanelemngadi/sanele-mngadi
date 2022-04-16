import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {

    render() {
        const description = "This is sanele mngadi's portfolio website";
        const fontsUrl = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
        return (
            <Html>
                <Head>
                    <meta name="description" content={description} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href={fontsUrl} rel="stylesheet" crossOrigin="true" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}


