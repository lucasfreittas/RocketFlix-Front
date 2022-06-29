import { Container, Avatar } from './styles';
import { Input } from '../../Components/Input';
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input type='text' placeholder='Pesquisar pelo título' />

            <Avatar>

                <div>
                    <p>Lucas Freitas</p>
                    <span>Sair</span>
                </div>
                <Link to='/profile'>
                    <img src="https://github.com/lucasfreittas.png" alt="Foto do Usuário" />
                </Link>
            </Avatar>
        </Container>
    )
}

