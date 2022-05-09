import React from 'react';
import './Footer.css'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div>
            <div>
                <footer>
                    <div className="rows primary">
                        <div className="columns about mt-10">

                            <h3>Immigo Developer</h3>

                            <p>
                                This is a immigration website,<br /> make by RH Rabin
                            </p>

                            <div className="social">

                            </div>
                        </div>

                        <div className="columns links">
                            <h3>Some Links</h3>

                            <ul className='ul-class'>

                                <li>
                                    <a href="#faq">F.A.Q</a>
                                </li>
                                <li>
                                    <a href="#cookies-policy">Cookies Policy</a>
                                </li>
                                <li>
                                    <a href="#terms-of-services">Terms Of Service</a>
                                </li>
                                <li>
                                    <a href="#support">Support</a>
                                </li>
                            </ul>

                        </div>


                        <div className="columns links">
                            <h3>Social Link</h3>
                            <ul className='ul-class'>
                                <li>
                                    <a href="#faq">Facebook</a>
                                </li>
                                <li>
                                    <a href="#cookies-policy">Twiteer</a>
                                </li>
                                <li>
                                    <a href="#terms-of-services">Github</a>
                                </li>
                                <li>
                                    <a href="#support">Support</a>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className="text-center">

                        <p>Copyright &copy; {new Date().getFullYear()} Smart Furniture</p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;