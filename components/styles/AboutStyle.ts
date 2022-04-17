import styled from "styled-components";
import { ThemesInterface } from "../../themes/theme";

export const AboutStyled = styled.div<ThemesInterface>`
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 2rem 0;
    height: 27.875rem;
    width: 100%;
    position: relative;
    @media (min-width: 992px){
        background-color:transparent;
        background: url(${({ theme }) => theme.images.aboutBg}) no-repeat center;
        padding: 1rem;
        height: 41.25rem;

        .contianer{
            position:relative;
        }
    }
`

export const AboutCard = styled.div<ThemesInterface>`
    min-height: 29.3125rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 1.5rem;
    padding-top: 0.5rem;
    box-shadow: .5em 0.5em 1em rgba(0,0,0,0.3);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "one"
                        "two";

    div{
        grid-area: one;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2rem 0;
    }
    ul{
        grid-area: two;
        padding: 1rem 2rem;
        text-align: center;
        list-style: none;
    }
    li{
        font-weight: 700;
        margin: .5rem 0;
    }

    @media (min-width: 768px){
        min-height: 18rem;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "two one";
        margin-top: 2.5rem;

        ul{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
        div{
            grid-area: one;
            display: flex;
            align-items: end;
            justify-content: flex-end;
            margin: 2rem 0;
        }
    }
    @media (min-width: 992px){
        width: 85%;
        position: absolute;
        left: 2rem;
        top: 14rem;    

        min-height: 25rem;
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-template-areas: "two one";
        margin-top: 2.5rem;

        ul{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }
    div{
        align-items: end;
        justify-content: center;
        margin: 0rem 0;
        position: absolute;
        right: -20%;
        top: -4%;
        transform: translateX(30%);
        img{
            width: 531px !important;
            height: 361px !important;
        }
        }
    }
`

export const AboutHeading = styled.div<ThemesInterface>`
    padding: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    p{
        text-align: center;
    }
    @media (min-width: 992px){
        h1{
            font-size: 3rem;
            margin-top: 2rem;
        }
        p{
            text-align: start;
        }
    }
`