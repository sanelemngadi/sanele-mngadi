// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Global, theme } from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyle: Element | null = document.querySelector("#jss-server-side");

    if (jssStyle) {
      jssStyle.parentElement?.removeChild(jssStyle);
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
