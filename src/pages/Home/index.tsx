// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Container from '../../components/Container';
import Image from '../../components/Image';
import news from '../../data/news';
import images from '../../data/images';
import Link from '../../components/Link';

const galery = images.slice(1);

const Home = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="flex-start" $gap="0.5rem" $overflowY='auto'>
                {/* Container de Destaque */}
                <Container $width="80%" $height="30rem" $direction="row" $align="center" $justify="center" $border='2px solid #03045e' $radius='0.5rem'>
                    <Container $width="25%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
                        <Container $width="80%" $height="2rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                            <h3>Vestibular</h3>
                        </Container>
                        <Container $width="80%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $color="#03045e">
                            <p style={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                                Learnsphere publica resultados das chamadas públicas de seleção para cursos de Fruticultura e Engenharia de Pesca.
                            </p>
                            <p style={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                                Os candidatos selecionados devem realizar a matrícula no período de 10 a 12 de maio por meio de formulário eletrônico disponível no edital.
                            </p>
                            <Link to='/vestibular' $color='#0077b6'>Saiba mais</Link>
                        </Container>
                    </Container>
                    <Container $width="75%" $height="100%" $align="center" $justify="center">
                        <Image src={images[0].src} alt={images[0].alt} />
                    </Container>
                </Container>
                <Container $width="80%" $height="2rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $bg='#03045e' $color="#fff" $radius='0.5rem'>
                    <h3>Notícias</h3>
                </Container>
                {/* Container com Cards */}
                <Container $width="80%" $height="10rem" $gap="0.3rem" $direction="row" $align="center" $justify="flex-start" $overflowX='auto' >
                    {news.map((item, index) => (
                        <Container key={index} $width="33%" $height="100%" $direction="column" $align="flex-start" $justify="flex-start" $border='2px solid #0077b6' $color="#03045e" $radius='0.5rem'>
                            <Container $width="100%" $height="2.5rem" $padding="0.5rem" $direction="column" $align="center" $justify="center" $color="#0077b6" $border='1px solid #0077b6' $radius='0.3rem'>
                                <h4 style={{ textAlign: 'center' }}>{item.title}</h4>
                            </Container>
                            <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start">
                                <p style={{ textAlign: 'justify', fontSize: '0.9rem' }}>{item.description}... <Link to='/noticias' $color='#0077b6' $decoration='underline'> Saiba mais</Link></p>
                            </Container>
                        </Container>
                    ))}
                </Container>
                <Container $width="80%" $height="2rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $bg='#03045e' $color="#fff" $radius='0.5rem' >
                    <h3>Galeria</h3>
                </Container>
                <Container $width="80%" $height="20rem" $gap="0.3rem" $direction="row" $align="center" $justify="flex-start" $overflowX='auto' >
                    {galery.map((item, index) => (
                        <Container key={index} $width="33%" $height="100%" $direction="column" $align="flex-start" $justify="flex-start" $border='2px solid #0077b6' $color="#03045e" $radius='0.5rem'>
                            <Container $width="100%" $height="2.5rem" $padding="0.5rem" $direction="column" $align="center" $justify="center" $color="#0077b6" $border='1px solid #0077b6' $radius='0.3rem'>
                                <h4 style={{ textAlign: 'center' }}>{item.title}</h4>
                            </Container>
                            <Container $width="100%" $height="13rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
                                <Image src={item.src} alt={item.alt} />
                            </Container>
                            <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start">
                                <p style={{ textAlign: 'justify', fontSize: '0.9rem' }}>{item.description}</p>
                            </Container>
                        </Container>
                    ))}
                </Container>
            </Container>
        </Container>

    );

};


export default Home;