import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const FormLabel = styled.label`
    font-weight: bold;
`;

const FormInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
`;

const FormButton = styled.button`
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #0077b6;
    color: #fff;
    cursor: pointer;
`;

export { FormContainer, FormField, FormLabel, FormInput, FormButton };