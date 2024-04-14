// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Container from '../../components/Container';
import courses from '../../data/courses';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from '../../components/Image';

const Courses = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="flex-start" $gap="0.5rem">
                <Container $width="100%" $direction="row" $align="flex-start" $justify="center" $gap="0.2rem">
                {
                    courses.map((course, index) => (
                        <Accordion key={index} style={{ width: '26.7%', borderRadius: '0.5rem' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{course.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    course.list.map((item, index) => (
                                        <Accordion key={index}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography>{item.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start" $color="#03045e">
                                                    <p style={{ textAlign: 'justify', fontSize: '0.9rem' }}>{item.description}</p>
                                                    <Container $width="100%" $height="2rem" $padding="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                                                        <h5>Grade Curricular</h5>
                                                    </Container>
                                                    <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start" $color="#03045e">
                                                        {
                                                            item.curriculum.map((curriculum, index) => (
                                                                <p key={index} style={{ textAlign: 'justify', fontSize: '0.9rem' }}>{curriculum}</p>
                                                            ))
                                                        }
                                                    </Container>
                                                    <Container $width="100%" $height="2rem" $padding="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                                                        <h5>Corpo Docente</h5>
                                                    </Container>
                                                    <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start" $color="#03045e">
                                                        {
                                                            item.faculty.map((faculty, index) => (
                                                                <p key={index} style={{
                                                                    textAlign: 'justify', fontSize
                                                                        : '0.9rem'
                                                                }}>{faculty}</p>
                                                            ))
                                                        }
                                                    </Container>
                                                    <Container $width="100%" $height="2rem" $padding="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                                                        <h5>Metodologias</h5>
                                                    </Container>
                                                    <Container $width="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start" $color="#03045e">
                                                        <p style={{ textAlign: 'justify', fontSize: '0.9rem' }}>{item.methodology}</p>
                                                    </Container>
                                                </Container>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                }
                            </AccordionDetails>
                        </Accordion>

                    ))
                }
                </Container>
                <Container $width="80%" $height="30rem" $direction="row" $align="flex-start" $justify="flex-start" $border="2px solid #0077b6" $radius="0.5rem">
                    <Image src="https://static.vecteezy.com/ti/fotos-gratis/p1/11923945-grupo-de-adolescentes-felizes-na-escola-gratis-foto.jpg" alt="alunos" />
                </Container>
            </Container>
        </Container>

    );

};


export default Courses;