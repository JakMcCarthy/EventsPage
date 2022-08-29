import React from 'react';
import {Link} from 'react-router-dom';
import '/Footer.css';

function Footer() {
    return (
        <div>
            className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Investors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contace Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
