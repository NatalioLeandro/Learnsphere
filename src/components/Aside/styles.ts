import { styled } from 'styled-components';

const AsideContainer = styled.aside`

    grid-area: aside;

    height: 100%;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 10fr 2fr;
    grid-template-areas: 
        "menu"
        "footer";

    background-color: #fff;
    color: #ffffff;

    @media (max-width: 768px) {

        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
        grid-template-areas: 
            "menu"
            "footer";

    }

`;

export default AsideContainer;