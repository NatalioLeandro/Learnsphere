import Container from "../../../components/Container";
import Form from "../../../components/Form";
import { users } from "../../../data/users";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const fields = [
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Digite seu email'
    },
    {
        label: 'Senha',
        name: 'password',
        type: 'password',
        placeholder: 'Digite sua senha'
    },

];

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            
        e.preventDefault();

        const user = users.find(user => user.email === formData.email && user.password === formData.password);

        if (user) {
            localStorage.setItem('token', user.email);
            navigate('/');
        } else {
            toast.error('Email ou senha inválidos');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
        <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="center" $gap="0.5rem" $overflowY='auto'>
            <Container $width="80%" $height="30rem" $gap='0.1rem' $direction="column" $align="center" $justify="flex-start">
                <ToastContainer />
                <Form $fields={fields} $buttonText="Entrar" $onSubmit={handleSubmit} $handleChange={handleChange} />
            </Container>
        </Container>
    </Container>
    );

}

export default Login;