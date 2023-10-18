import '../styles/navbar.css'
import React from 'react'
import { Sidenav, Nav } from 'rsuite'
import { Link } from 'react-router-dom'
import 'rsuite/dist/rsuite.min.css';

function Navbar() {
    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
            {children}
        </Link>
    ));
    return (
        <div style={{ width: 240 }}>
            <Sidenav defaultOpenKeys={['3']}>
                <Sidenav.Body>
                    <Nav activeKey="1">
                        <Nav.Item eventKey="1" as={NavLink} href="/">
                            Home
                        </Nav.Item>
                        <Nav.Menu eventKey="3" title="Res Hall" >
                            <Nav.Item eventKey="3-1" as={NavLink} href="/firstfloor">1st Floor</Nav.Item>
                            <Nav.Item eventKey="3-2" as={NavLink} href="/secondfloor">2nd Floor</Nav.Item>
                            <Nav.Item eventKey="3-3" as={NavLink} href="/thirdfloor">3rd Floor</Nav.Item>
                            <Nav.Item eventKey="3-4" as={NavLink} href="/fourthfloor">4th Floor</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
        //     <Nav.Item as={NavLink} href="/">
        //         Home
        //     </Nav.Item>
    )
}

export default Navbar