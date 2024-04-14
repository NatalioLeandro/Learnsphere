import { styled } from 'styled-components';

const LayoutContainer = styled.div`

    max-width: 100vw;
    min-height: 100vh;

    display: grid;

    grid-template-columns: 2fr 10fr;
    grid-template-rows: 2fr 10fr;

    grid-template-areas: 
        "header header"
        "aside main";

    @media (max-width: 768px) {

        grid-template-columns: 1fr;
        grid-template-rows: 1fr 9fr 2fr;

        grid-template-areas: 
            "header"
            "main"
            "aside";

    }

`;

export default LayoutContainer;