import Image from 'next/image';
import { FunctionComponent } from 'react';
import { AboutCard, AboutHeading, AboutStyled, Container } from '../styles';

const About: FunctionComponent = () => {
    return (
        <AboutStyled id='about'>
            <Container className='contianer'>
                <AboutHeading className="about_heading">
                    <h1>About Me</h1>
                    <p>It would be amazing knowing that your are not working with a robot,
                        here are few information about me..</p>
                </AboutHeading>
                <AboutCard className="about_card">
                    <div>
                        <Image
                            // src='/assets/about.png'
                            src='/vectors/aboutme.svg'
                            alt='this is about me illustration'
                            width='179px'
                            height='121px'
                        />
                    </div>
                    <ul>
                        <li>My Name is Sanele Mngadi</li>
                        <li>Grew up from Hluhluwe (KZN, South Africa)</li>
                        <li>A self taught programmer/designer from 2018</li>
                        <li>Studied Land Surveying at University of KwaZulu-Natal</li>
                        <li>Passionate about tech</li>
                    </ul>
                </AboutCard>
            </Container>
        </AboutStyled>
    )
}

export default About