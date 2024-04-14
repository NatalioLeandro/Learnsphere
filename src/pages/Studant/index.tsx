import { users, user_data } from "../../data/users";
import Container from '../../components/Container';
import { Table, TableBody, TableRow, TableCell, TableHead } from "@mui/material";


const Studant = () => {

    const token = localStorage.getItem('token');

    const info = users.find(user => user.email == token);

    const data = user_data.find(data => data.id == info!.id);


    return (
        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="100%" $height="80vh" $direction="column" $align="center" $justify="flex-start" $gap="0.5rem" $overflowY='auto'>
                <Container $width="80%" $height="30rem" $gap='0.1rem' $direction="column" $align="center" $justify="flex-start">
                    <Container $width="80%" $height="2rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                        <h3>Seus Dados</h3>
                    </Container>
                    <Container $width="80%" $height="5rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start">
                        <p><strong>Nome:</strong> {info!.name}</p>
                        <p><strong>Email:</strong> {info!.email}</p>
                        <p><strong>Curso:</strong> {data!.course}</p>
                    </Container>
                    <Container $width="80%" $height="2rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $bg='#0077b6' $color="#fff" $radius='0.5rem'>
                        <h3>Boletim</h3>
                    </Container>
                    <Container $width="80%" $height="15rem" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="flex-start" $justify="flex-start">
                        <Table style={{border: '1px solid #0077b6', borderRadius: '0.5rem'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Matéria</TableCell>
                                    <TableCell>Nota 1</TableCell>
                                    <TableCell>Nota 2</TableCell>
                                    <TableCell>Nota 3</TableCell>
                                    <TableCell>Nota 4</TableCell>
                                    <TableCell>Situação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data!.subjects.map(subject => {
                                        return (
                                            <TableRow key={subject.name}>
                                                <TableCell>{subject.name}</TableCell>
                                                {
                                                    subject.grades.map(grade => {
                                                        return (
                                                            <TableCell>{grade}</TableCell>
                                                        );
                                                    })
                                                
                                                }
                                                <TableCell>{subject.grades.reduce((acc, curr) => acc + curr) / subject.grades.length >= 7 ? 'Aprovado' : 'Reprovado'}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
}

export default Studant;