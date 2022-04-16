// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import { Global, theme } from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
