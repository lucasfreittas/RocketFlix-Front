import { Container, Title, Content } from './styles';
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button';
import {FiPlus} from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Header />
            <Title>
                <h1>Meus Filmes</h1>
                <Button icon={FiPlus} title='Adicionar Filme' /> 
            </Title>

            <Content>
                <h1>Conteúdo</h1>
            </Content>
        </Container>
    )
}