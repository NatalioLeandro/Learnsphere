import { styled } from 'styled-components';

const MenuContainer = styled.div`

    grid-area: menu;

    height: 66vh;

    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 1rem;

`;


const Group = styled.div`

    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;


const TitleBox = styled.div`
    
    height: 2rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #03045e;
    border-radius: 0.5rem;

    padding: 0.5rem;

`;

const LinkBox = styled.div`

    width: 100%;
 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; 

    gap: 0.5rem;
    margin: 0.5rem 0;

`;

const LinkBoxItem = styled.div`
    
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 0.5rem;
    border-radius: 0.5rem;

    background-color: #F5F5F5;

`;

export { MenuContainer, Group, TitleBox, LinkBox, LinkBoxItem };