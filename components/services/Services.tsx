import Image from 'next/image';
import { FunctionComponent } from 'react';
import { ServiceCard, ServiceStyle } from '../styles/ServiceStyled';

const Services: FunctionComponent = () => {
    return (
        <ServiceStyle>
            <div className="service_heading">
                <h1>Services</h1>
                <p>We offer a variety of services for small businesses
                    and university/college students</p>
            </div>

            <ServiceCard className='service_card_one'>
                <div className='card_image'>
                    <Image
                        src='/assets/webdesign.png'
                        alt='web designer illustration'
                        width='81px'
                        height='115px'
                    />
                </div>

                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, possimus!</p>
            </ServiceCard>
            <ServiceCard className='service_card_two'>
                <div className='card_image'>
                    <Image
                        src='/assets/webdev.png'
                        alt='web development illustration'
                        width='100px'
                        height='81px'
                    />
                </div>

                <h4>Web Development</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, possimus!</p>
            </ServiceCard>
            <ServiceCard className='service_card_three'>
                <div className='card_image'>
                    <Image
                        src='/assets/studymap.png'
                        alt='study area map'
                        width='100px'
                        height='70px'
                    />
                </div>

                <h4>Project Study Maps</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, possimus!</p>
            </ServiceCard>
        </ServiceStyle>
    )
}

export default Services