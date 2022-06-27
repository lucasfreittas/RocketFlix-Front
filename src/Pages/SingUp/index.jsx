import { Container, Form, Photo } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextLink } from '../../Components/TextLink';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export function SingUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input type='text' icon={FiUser} placeholder='Nome'/>
                <Input type='email' icon={FiMail} placeholder='E-mail'/>
                <Input type='password' icon={FiLock} placeholder='Senha'/>

                <Button title='Cadastrar' /> 

                <Link to='/'>
                <div className="TextLink">
                    <TextLink icon={FiArrowLeft} title='Voltar para o login'/> 
                </div>
                </Link>
            </Form>
            <Photo /> 
        </Container>
    )
}