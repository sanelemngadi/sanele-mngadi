import { FunctionComponent } from 'react';
import { Container } from './styles';
import Hero from "../components/home/Hero";
import SocialMedia from './home/SocialMedia';

const Layout: FunctionComponent = () => {
    return (
        <>
            <Hero />
            <Container>
                <SocialMedia />
            </Container>
        </>
    )
}

export default Layout