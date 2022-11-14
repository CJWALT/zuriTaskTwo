import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="footer-wrap">
                    <div className="logo--icons">
                        <img src="img/footer--logo.png" alt="footer logo" className="footer-img"/>
                        <div className="social-icons">
                            <a href="https://facebook.com/emmaayo"><FaFacebook/></a>
                            <a href="https://instagram.com/im_walt"><FaInstagram/> </a>
                            <a href="https://twitter.com/im_walt"><FaTwitter/> </a>
                        </div>
                        
                    </div>
                    <div className="footer--links__wrap">
                        <div className="community--links">
                            <h5>
                                Community
                            </h5>
                            <ul className="footer-links">
                                <li>
                                <a href='/'className='footer--link'>Nft</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Tokens</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Landlords</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className="places--links">
                            <h5>
                                Places
                            </h5>
                            <ul className="footer-links">
                                <li>
                                <a href='/'className='footer--link'>Castle</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Farms</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Beach</a>
                                </li>
                                <li>
                                <a href='/'className='footer--link'>Learn more</a>
                                </li>
                            </ul>
                        </div>
                        <div className="places--links">
                            <h5>
                                About us
                            </h5>
                            <ul className="footer-links">
                                <li>
                                <a href='/' className='footer--link'>Road map</a>
                                </li>
                                <li>
                                <a href='/' className='footer--link'>Creators</a>
                                </li>
                                <li>
                                <a href='/' className='footer--link'>Career</a>
                                </li>
                                <li>
                                <a href='/' className='footer--link'>Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <small className="copyright"> 
                            &copy; 2022 Metabnb
                        </small>
            </div>
        </footer>
    </>
  )
}

export default Footer