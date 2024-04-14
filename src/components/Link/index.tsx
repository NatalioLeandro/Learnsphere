import StyledLink from "./styles";
import LinkProps from "./types";

interface LinkFuncProps {
    children: React.ReactNode;
    to: string;
};

const Link = ({ children, to, ...props }: LinkFuncProps & LinkProps) => {

    return (
        <StyledLink to={to} {...props}>
            {children}
        </StyledLink>
    );
    
};

export default Link;