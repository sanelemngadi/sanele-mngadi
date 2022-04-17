import { FunctionComponent } from 'react';
import { Foota } from '../styles'

const Footer: FunctionComponent = () => {
    const date = new Date().getFullYear();
    return (
        <Foota>
            <h5>Sanele Mngadi &copy; {date}</h5>
        </Foota>
    )
}

export default Footer