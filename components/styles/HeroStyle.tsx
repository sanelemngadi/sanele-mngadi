import styled from "styled-components";
import { ThemesInterface } from "../../themes/theme";

export const HeroStyle = styled.div<ThemesInterface>`
    min-height: calc(100vh - 4.5rem - 5rem);
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items:center;
`

export const HeroWrapper = styled.div<ThemesInterface>`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "one"
                        "two";

    .hero_image{
        width: 100%;
        height: 100%;
        grid-area: one;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .hero_image img{
        width: 258px;
        height: 216px;
    }

    .hero_text {
        width: 100%;
        height: 100%;
        grid-area: two;
        font-size: 2rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }
    @media (min-width: 576px){
        font-size: 2.5rem;
    }
    @media (min-width: 768px){
        font-size: 2.5rem;
        padding: 4rem 0;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "two one";


    @media (min-width: 992px){
        padding: 2rem 0;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "two one";

        .hero_image img{
            width: 446px !important;
            height: 375px !important;
        }

        .hero_text {
            font-size: 3.5rem;enter;
        }
    }
`

export const CTX = styled.a<ThemesInterface>`
    width: 50%;
    height: 2.8125rem;
    font-size: .8rem;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    display:flex;
    align-items:center;
    justify-content: center;
    margin: 1em 0;
    border-radius: .3rem;
    text-decoration: none;
    &:visited,
    &:link{
        color:${({ theme }) => theme.colors.secondary};
    }
`

export const Socials = styled.div<ThemesInterface>`
    position: relative;
    width: 100%
    height: 2.8125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
        width: 80%;
        display: flex;
        height: 2.8125rem;
        margin: 0.5rem 0;
    }
    li{
        list-style: none;
        height: 2.8125rem;
        width: 80%;
        flex: 1;
        &:last-child{
            width: 100%;
            padding-left: auto;
            flex: 4;

            a{
                justify-content: flex-end;
            }
        }
    }
    a{
        height: 100%;
        width: 100%;
        text-decoration: none;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 768px){
        height: 3.98125rem;
        justify-content: flex-end;
        ul{
            height: 110%;
            width: 45%;
            padding: 1em;
            justify-content: right;
            height: 3.8125rem;
            margin: 1rem 0;
            background-color:#fff;
            transform: translateY(-95%);
            transition: transform 0.5s ease-in-out;
        }
        li{
            width: 100%;
            flex: 1;
            &:last-child{
                a{
                    justify-content: center;

                }
            }
        }
    }

    
`