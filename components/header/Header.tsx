import React from 'react';
import { Container, Wrapper, Logo, Nav } from '../styles';
import Link from 'next/link';
import { theme } from '../../themes/theme';
import Image from 'next/image';

const Header = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Logo href='/' theme={theme}>
                        <div>
                            <Image
                                alt="Mountains"
                                src="/assets/SMLOGO.png"
                                height='41px'
                                width="100px"
                            />
                        </div>
                        <h3>Sanele Mngadi</h3>
                    </Logo>
                    <Nav theme={theme}>
                        <ul>
                            <li>
                                <Link href="/"><a >Home</a></Link>
                            </li>
                            <li>
                                <Link href="/blog"><a >Blog</a></Link>
                            </li>
                        </ul>
                    </Nav>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Header