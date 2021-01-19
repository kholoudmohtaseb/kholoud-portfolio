import React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeOutlined, SchoolRounded, WorldRounded, Facebook, Twitter, LinkedIn, GitHub, Telegram }
    from '@material-ui/icons';
import './Header.css'
// import emailjs from 'emailjs-com'
// import apiKeys from '../apikeys'
import CustomButton from '../button/Button';
import resumeData from '../../utils/resumeData';

const Header = (props) => {
    const pathName = props?.location?.pathname;

    // const onSubmit = (e) => {
    //     e.preventDefault()// Prevents default refresh by the browser
    //     emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    //         .then(result => {
    //             alert('Message Sent, I\'ll get back to you shortly', result.text);
    //         },
    //             error => {
    //                 alert('An error occured, Plese try again', error.text)
    //             })
    // }

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
                    {/* About Me link */}
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header-link-active' : 'header-link'}>
                        About Me
                    </Nav.Link>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/resume' className={pathName === '/resume' ? 'header-link-active' : 'header-link'}>
                        Resume
                    </Nav.Link>

                    {/* portfolio Link */}
                    <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header-link-active' : 'header-link'}>
                        Portfolio
                    </Nav.Link>
                    {/* Contact Link */}
                    <Nav.Link as={NavLink} to='/contact' className={pathName === '/contact' ? 'header-link-active' : 'header-link'}>
                        Contact Me
                    </Nav.Link>
                </Nav>
                <div className="header-right">
                    {/* social icons */}
                    {/* {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank">
                            {resumeData.socials[key].icon}
                        </a>
                    ))} */}
                    <CustomButton text={'Hire Me'} icon={<Telegram />} />
                    {/* <form className='form' onSubmit={onSubmit}>
                        <p>Your Name:</p>
                        <input name='name' type='text' placeholder='name…' className='form__input' />
                        <p>Subject:</p>
                        <input name='subject' type='text' placeholder='Subject…' className='form__input' />
                        <p>Your Message:</p>
                        <textarea name='message' type='text' placeholder='Your Message…' className='form__input-message' ></textarea>
                        <button className='form__input — button'>Send Message</button>
                    </form> */}
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
