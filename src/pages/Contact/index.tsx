import Accordion from '../../components/Accordion';
import Container from '../../components/Container';
import contacts from '../../data/contacts';

const Contact = () => {
    return (
        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="flex-start" $gap="0.5rem" $overflowY='auto'>
                <Container $width="80%" $height="30rem" $gap='0.1rem' $direction="column" $align="center" $justify="flex-start">
                    <Accordion data={contacts} />
                </Container>
            </Container>
        </Container>
    );
};

export default Contact;