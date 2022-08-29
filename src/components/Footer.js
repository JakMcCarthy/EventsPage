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
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>YouTube</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* logo & website rights */}
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            AroundTown <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>AroundTown 2022</small>
                    {/* social media icons - facebook, instagram, twitter, linkedin */}
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link-facebook'
                            to='/'
                            target='_blank'
                            //  accessibility
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
