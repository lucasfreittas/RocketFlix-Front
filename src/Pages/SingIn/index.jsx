import { Container, Form, Photo } from './styles';
import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input type='email' placeholder='E-mail' />
            </Form>

            <Photo/>
        </Container>
    )
}