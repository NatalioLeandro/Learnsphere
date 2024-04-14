import Container from '../../components/Container';
import Link from '../../components/Link';

const Notfound = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $resposive={{ $width: "100vw", $padding: "0.5rem", $gap: "0.5rem", $direction: "column", $align: "center", $justify: "center", $height:"90vh" }}>
            <h1>404</h1>
            <h2>Página não encontrada/implementada</h2>
            <Link to="/" $color="#03045e">Voltar para a página inicial</Link>
        </Container>

    );
    
};


export default Notfound;