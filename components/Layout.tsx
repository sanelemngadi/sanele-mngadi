import { FunctionComponent } from 'react';
import { Container } from './styles';
import Hero from "../components/home/Hero";
import SocialMedia from './home/SocialMedia';
import Services from './services/Services';
import About from './about/About';
import Contact from './contacts/Contact';

const Layout: FunctionComponent = () => {
    return (
        <>
            <Hero />
            <Container>
                <SocialMedia />
                <Services />
            </Container>
            <About />
            <Contact />
        </>
    )
}

export default Layout