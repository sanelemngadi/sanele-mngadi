import { FunctionComponent } from 'react'
import { Container } from '../components/styles'
import { Blogs } from '../components/styles/Blogs'

const Blog: FunctionComponent = () => {
    return (
        <Container>
            <Blogs>
                <h2>No Blogs at the moment please check again later</h2>
            </Blogs>
        </Container>
    )
}

export default Blog