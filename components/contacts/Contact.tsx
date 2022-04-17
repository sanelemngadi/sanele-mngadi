import Image from 'next/image';
import { FunctionComponent } from 'react';
import { Contacts, ContactForm, Container } from '../styles';

const Contact: FunctionComponent = () => {
    return (
        <Contacts id='contact'>
            <Container className="container">
                <section>
                    <Image
                        src='/assets/contactsMe.png'
                        width='141px'
                        height='130px;'
                        alt='hands shaking for the sealed deal'
                    />
                </section>
                <div>
                    <ContactForm>
                        <p className='name'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder=' Please enter your name '
                                required
                            />

                        </p>
                        <p className='email'>
                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=' name@email.com '
                                required />

                        </p>
                        <p className='message'>
                            <label htmlFor="message">Message: </label>
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                placeholder=" Send me a message "
                            >

                            </textarea>

                        </p>
                        <p className='submit'>
                            <input type="submit" value="Submit" />
                        </p>
                    </ContactForm>
                </div>
            </Container>
        </Contacts>
    )
}

export default Contact