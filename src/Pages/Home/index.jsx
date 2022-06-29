import { Container, Title, Content } from './styles';
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button';
import {FiPlus, FiStar,} from 'react-icons/fi'
import { Note } from '../../Components/Note';

export function Home(){
    return(
        <Container>
            <Header />
            <Title>
                <h1>Meus Filmes</h1>
                <Button icon={FiPlus} title='Adicionar Filme' /> 
            </Title>

            <Content>
                <Note data={{
                    title: 'Elysium',
                    stars: [<FiStar/>, <FiStar/>, <FiStar/>, <FiStar/>, <FiStar/>],
                    description: 'Essa é uma descrição ficticia'
                    }}/> 
              
            </Content>
        </Container>
    )
}