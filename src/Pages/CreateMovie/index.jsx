import { Container, Movie, Markers, Main } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { TextLink } from '../../Components/TextLink';
import { TextArea } from '../../Components/TextArea';
import { Button } from '../../Components/Button';
import { NewMarker } from '../../Components/NewMarker'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie(){
    return(
        <Container>
            <Header/>
                <Main>
                    <Movie>
                        <section className='link'>
                            <Link to='/'>
                                <TextLink icon={FiArrowLeft} title='Voltar'/>
                            </Link>
                        </section>
                        <h1>Novo Filme</h1>
                        <div>
                            <Input type='Text' placeholder='Título' />
                            <Input type='number' placeholder='Sua nota (de 0 a 5)' />
                        </div>
                            <TextArea placeholder='Oberservações' />
                    </Movie>

                    <Markers>
                        <h3>Marcadores</h3>
                        <div className='tagContainer'>
                            <NewMarker value='React' />
          
                            <NewMarker isNew placeholder='Novo Marcador' />
                        </div>
                    

                        <section className='formButtons'>
                            <Button title='Excluir Filme' />
                            <Button title='Salvar Alterações' />
                        </section>
                    </Markers>
                </Main>
        </Container>
    )
}