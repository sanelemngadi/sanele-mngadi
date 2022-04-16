import { createGlobalStyle } from "styled-components";


interface FontInterface {
    basic: string
}
interface ColorsInterface {
    primary: string,
    secondary: string,
    tertiary: string,
}

export interface ThemesInterface {
    theme: {
        fonts: FontInterface,
        colors: ColorsInterface,
        colorIcons: ColorsInterface,
    }
}

export const theme = {
    fonts: {
        basic: "'Poppins', sans-serif;"
    },
    colors: {
        primary: '#1E3A8A',
        secondary: '#BFDBFE',
        tertiary: '#000'
    },
    colorIcons: {
        primary: '#71ADF8',
        secondary: '#707070',
        tertiary: '#fff'
    }
}

export const Global = createGlobalStyle < ThemesInterface>`
    *,*::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: 0.5s;
    }

    body{
        min-height: 100vh;
        font-family: ${({ theme }) => theme.fonts.basic};

        background-color: #fff;
    }
`