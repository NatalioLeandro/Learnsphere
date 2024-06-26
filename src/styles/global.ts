import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {

        box-sizing: border-box;
        margin: 0;
        padding: 0;

        list-style: none;
        text-decoration: none;

    }

    &::-webkit-scrollbar {
        display: none;
    }
    
`;

export default GlobalStyle;