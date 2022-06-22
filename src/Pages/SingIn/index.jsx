import { Container, Form, Photo } from './styles';
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input type='email' icon={FiMail} placeholder='E-mail' />
                <Input type='password' icon={FiLock} placeholder='Senha' />
                <Button title='Entrar'/>
            </Form>

            <Photo/>
        </Container>
    )
}