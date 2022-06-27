import { Container, Header, Content } from './styles';
import { TextLink } from '../../Components/TextLink';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';

export function Profile(){
    return(
        <Container>
            <Header>
                <Link to='/'>
                    <TextLink icon={FiArrowLeft} title='Voltar'/>
                </Link>
            </Header>
            
            <Content>
                <Input type='text' icon={FiUser} value='Lucas Freitas'/>
                <Input type='email' icon={FiMail} value='l.freittas@outlook.com'/>
                <Input type='password' icon={FiLock} placeholder='Senha Atual'/>
                <Input type='password' icon={FiLock} placeholder='Nova Senha'/>

                <Button title='Salvar'/> 
            </Content> 
        </Container>
    )
}