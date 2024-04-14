import { styled } from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const AccordionContainer = styled(Accordion)`

    width: 100%;
    max-height: 15rem;
    padding: 0.5rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border-radius: 0.5rem;
    border: 1px solid #03045e;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

`;

const AccordionItem = styled(AccordionSummary)`

    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    gap: 0.5rem;

    border-radius: 0.5rem;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

`;

const AccordionContent = styled(AccordionDetails)`

    width: 100%;
    padding: 0.5rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #03045e;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

`;

const AccordionText = styled(Typography)`
    color: #03045e;
`;

export { AccordionContainer, AccordionItem, AccordionContent, AccordionText };