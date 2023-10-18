import React from 'react'
import Navbar from '../components/Navbar'
import StaticHeader from '../components/StaticHeader';
import { Container, Header, Sidebar, Content, Footer } from 'rsuite';

function MainLayout({ children }) {
    return (
        <div>
            <Container>
                <Header>
                    <StaticHeader />
                </Header>
                <Container>
                    <Sidebar><Navbar /></Sidebar>
                    <Content>
                        {children}
                    </Content>
                </Container>
                <Footer>Footer</Footer>
            </Container>
        </div>
    )
}

export default MainLayout