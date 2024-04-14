import StyledImage from "./styles";

interface ImageProps {
    src: string;
    alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
    return <StyledImage src={src} alt={alt} />;
}

export default Image;