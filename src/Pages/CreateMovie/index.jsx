import { Container, Movie, Markers } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { TextLink } from '../../Components/TextLink';
import { TextArea } from '../../Components/TextArea';
import { Button } from '../../Components/Button';
import { Tags } from '../../Components/Tags';
import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie(){
    return(
        <Container>
            <Header/>
            <Link to='/'>
                <TextLink icon={FiArrowLeft} title='Voltar'/>
            </Link>
            <form>

                <Movie>
                    <h1>Novo Filme</h1>
                    <div>
                        <Input type='Text' placeholder='Título' />
                        <Input type='number' placeholder='Sua nota (de 0 a 5)' />
                        <TextArea placeholder='Oberservações' />
                    </div>
                </Movie>

                <Markers>

                </Markers>
            </form>
        </Container>
    )
}