import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import LinkProps from './types';

export const StyledLink = styled(Link)<LinkProps>`
  
    color: ${(props: LinkProps) => props.$color || '#ffffff'};
    font-size: 1rem;
    font-weight: 700;
    text-decoration: ${(props: LinkProps) => props.$decoration || 'none'};

    &:hover {
        color: ${(props: LinkProps) => props.$hoverColor || '#90e0ef'};
    }

`;

export default StyledLink;