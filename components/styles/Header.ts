import styled from "styled-components";
import { ThemesInterface } from "../../themes/theme";

export const Wrapper = styled.div`
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Nav = styled.nav<ThemesInterface>`
    height: 100%;
    width: 100%;
    flex: 2;
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    li{
        list-style: none;
    }
    a{
        height: 100%;
        padding: .5em;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        color: ${({ theme }) => theme.colorIcons.secondary}
    }
`
export const Logo = styled.a<ThemesInterface>`
    height: 100%;
    width: 100%;
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;

    h3{
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 800;
        padding:0;
        margin: 0;
    }

    div{
        height: 2.5625rem;
        width: 6.25rem;
        display: none;
    }
    @media (min-width: 576px){
        div{
            display: block;
        }
    }
`