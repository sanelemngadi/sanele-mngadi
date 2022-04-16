

import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";


export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />)
            })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } catch (error) {
            // handle error
            console.error(error);
        }

        finally {
            sheet.seal();
        }
    }

    render() {
        const description = "The Next generation of a news feed";
        const fontsUrl = "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap";
        return (
            <Html>
                <Head>
                    <meta name="description" content={description} />
                    <link href={fontsUrl} rel="stylesheet" />
                    {/* {this.props.styles} */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}


