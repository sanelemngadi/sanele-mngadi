import Image from 'next/image';
import React from 'react'
import { Container, HeroStyle } from '../styles';
import { CTX, HeroWrapper } from '../styles/HeroStyle';

const Hero = () => {
    return (
        <HeroStyle>
            <Container>
                <HeroWrapper>
                    <div className="hero_image">
                        <Image
                            src='/assets/heroimage.png'
                            alt='land surveyor'
                            width="258px"
                            height="216px"
                        />
                    </div>
                    <div className="hero_text">
                        We Map Your
                        digital presents
                        into an amazing
                        experience.

                        <CTX>
                            Hire me
                        </CTX>
                    </div>
                </HeroWrapper>


            </Container>
        </HeroStyle>
    )
}

export default Hero