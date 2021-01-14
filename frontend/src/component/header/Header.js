import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeOutlined, SchoolRounded, WorldRounded, Facebook, Twitter, LinkedIn, GitHub, Telegram }
    from '@material-ui/icons';
import './Header.css'
import CustomButton from '../button/Button';
import resumeData from '../utils/resumeData';

const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to='/' className="header-navlink">
                <Navbar.Brand className='header-home'>
                    <HomeOutlined />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="header-left">
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header-link-active' : 'header-link'}>
                        Resume
                    </Nav.Link>

                    {/* portfolio Link */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>
                        Portfolio
                    </Nav.Link>
                </Nav>
                <div className="header-right">
                    {/* social icons */}
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank">
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
