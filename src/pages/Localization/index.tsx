import Container from "../../components/Container";


const Localization = () => {
    
    return (
        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="flex-start" $gap="0.5rem" $overflowY='auto'>
                <Container $width="80%" $height="30rem" $direction="column" $align="center" $justify="center" $border="2px solid #03045e" $radius="0.5rem">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.661923206036!2d-46.63383948502139!3d-23.56615946722089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b6f2e8c8f6f%3A0x6d3f4c5c2e9b8c4b!2sR.%20Volunt%C3%A1rios%20de%20Piracicaba%2C%2017%20-%20Centro%2C%20Piracicaba%20-%20SP%2C%2013400-310!5e0!3m2!1spt-BR!2sbr!4v1632154872922!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ borderRadius: '0.5rem' }} loading="lazy"></iframe>
                </Container>
            </Container>
        </Container>
    );
}
export default Localization;