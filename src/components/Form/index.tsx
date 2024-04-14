import { FormContainer, FormField, FormLabel, FormInput, FormButton } from './styles';

interface FormProps {
    $onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    $handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    $fields: {
        label: string;
        name: string;
        type: string;
        placeholder: string;
    }[];
    $buttonText: string;
};

const Form = ({ $onSubmit, $handleChange, $fields, $buttonText }: FormProps) => {

    return (
        <FormContainer onSubmit={$onSubmit}>
            {$fields.map(field => (
                <FormField key={field.name}>
                    <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                    <FormInput type={field.type} name={field.name} placeholder={field.placeholder} onChange={$handleChange} />
                </FormField>
            ))}
            <FormButton type="submit">{ $buttonText }</FormButton>
        </FormContainer>
    );

}

export default Form;
        