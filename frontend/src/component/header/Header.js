import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, SchoolRounded, WorldRounded, Facebook, Twitter, LinkedIn, GitHub, Telegram }
    from '@material-ui/icons';
import './Header.css'
import CustomButton from '../button/Button';
const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='header-home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header-link-active' : 'header-link'}>
                        Resume
                    </Nav.Link>

                    {/* portfolio Link */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>
                <div>
                    {/* social icons */}

                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
