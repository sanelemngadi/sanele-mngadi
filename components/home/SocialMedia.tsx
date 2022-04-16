import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Socials } from '../styles/HeroStyle'

const SocialMedia = () => {
    return (
        <Socials>
            <ul>
                <li><a href="#"><FaFacebookSquare size={32} color="#3b5998" /></a></li>
                <li><a href="#"><FaTwitterSquare size={32} color=" #00acee" /></a></li>
                <li><a href="#"><FaLinkedin size={32} color="#0e76a8" /></a></li>
                <li><a href="#"><FaInstagramSquare size={56} color="##fd1d1d" /></a></li>
                <li><a href="#">
                    <Image
                        src='/assets/secondarylogo.png'
                        width="100px"
                        height="51px"
                    />
                </a></li>
            </ul>
        </Socials>
    )
}

export default SocialMedia