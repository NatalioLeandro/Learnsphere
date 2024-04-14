import { Fragment } from 'react/jsx-runtime';
import { AccordionContainer, AccordionItem, AccordionContent, AccordionText } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '../Link';

interface AccordionProps {
    data: { title: string, content: string, list?: string[] }[];     
}

const Accordion = ({ data: itens }: AccordionProps) => {
    return (
        <Fragment>
            {
                itens.map((item, index) => (
                    <AccordionContainer key={index}>
                        <AccordionItem expandIcon={<ExpandMoreIcon />}>
                            <AccordionText>{item.title}</AccordionText>
                        </AccordionItem>
                        <AccordionContent>
                            {item.title === 'Email' ? <Link to={`mailto:${item.content}`} $color='#03045e'>{item.content}</Link> : item.content}
                            {
                                item.list && (
                                    <ul>
                                        {
                                            item.list.map((list, index) => (
                                                <li key={index}>{list}</li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </AccordionContent>
                    </AccordionContainer>
                ))
            }
        </Fragment>
    );
};

export default Accordion;