import { Outlet } from 'react-router-dom';
import React from 'react';

import { Layout } from '../../components/Layouts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import Aside from '../../components/Aside';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Menu from '../../components/Menu';

const links = [

    { to: '/', children: 'HOME' },
    { to: '/about', children: 'SOBRE' },
    { to: '/contact', children: 'CONTATO' }

];

const pages = [

    { to: '/courses', children: 'Cursos' },
    { to: '/entrace-exam', children: 'Vestibular' },
    { to: '/feedback', children: 'Perguntas Frequentes' },

];

const Page = () => {

    return (

        <Layout>
            <Header>
                <Container $width='100%' $height='60%' $justify='space-around' $bg="#0077b6">
                    <Container $width='70%' $height='100%' $direction='column' $align='flex-start' $justify='center' $padding='0 1rem' $color='#fff'>
                        <Link to='/'>
                            <h1>Learnsphere</h1>
                            <h4>MINISTÉRIO DA EDUCAÇÃO</h4>
                        </Link>
                    </Container>
                    <Container $width='30%' $height='100%' $direction='row' $align='center' $justify='space-around' $padding='0 1rem'>
                        {links.map((link, index) => <Link key={index} to={link.to}>{link.children}</Link>)}
                    </Container>
                </Container>
                <Container $width='100%' $height='40%' $bg='#03045e' $resposive={{ $display: 'none' }}>
                    <Container $width='40%' $height='100%' $direction='row' $align='center' $justify='space-around' $padding='0 1rem' $color='#fff'>
                        {pages.map((page, index) => (
                            <React.Fragment key={index}>
                                <Link to={page.to}>{page.children}</Link>
                                {index < pages.length - 1 && <span>|</span>}
                            </React.Fragment>
                        ))}
                    </Container>
                </Container>
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Aside>
                <Menu />
                <Footer />
            </Aside>
        </Layout>

    );

};

export default Page;