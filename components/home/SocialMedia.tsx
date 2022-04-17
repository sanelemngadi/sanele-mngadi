import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Socials } from '../styles/HeroStyle'

const SocialMedia = () => {
    return (
        <Socials>
            <ul>
                <li><a href="https://www.facebook.com/sanele.nkosinathi.50" target="_blank" rel="noreferrer"><FaFacebookSquare size={32} color="#3b5998" /></a></li>
                <li><a href="#"><FaTwitterSquare size={32} color=" #00acee" /></a></li>
                <li><a href="https://www.linkedin.com/in/sanele-mngadi-a29ba415a/" target="_blank" rel="noreferrer"><FaLinkedin size={32} color="#0e76a8" /></a></li>
                <li><a href="https://www.instagram.com/omnesty/?hl=en" target="_blank" rel="noreferrer"><FaInstagramSquare size={56} color="##fd1d1d" /></a></li>
                <li><a href="/" target="_blank">
                    <Image
                        src='/assets/secondarylogo.png'
                        width="100px"
                        height="51px"
                        alt='This is the secondary logo of the page'
                    />
                </a></li>
            </ul>
        </Socials>
    )
}

export default SocialMedia