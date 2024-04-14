import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`

    grid-area: footer;

    height: 100%;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    border-top: 1px solid #03045e;

    background-color: #fff;

    @media (max-width: 768px) {
    
    }

`;

const FooterLink = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 1rem;
    padding: 1.5rem;
    color: #03045e;

    &:hover {
        color: #90e0ef;
    }

    @media (max-width: 768px) {

        justify-content: center;

    }

`;

const FooterText = styled.p`

    width: 100%;

    text-align: center;

    font-size: 0.8rem;
    margin-left: 10px;

    color: #03045e;

`;

export { FooterContainer, FooterLink, FooterText };