import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>讓我們一起為這世界，創造更大的樂趣!!</p>

                            <ul className="social-link">
                                <li>
                                    <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>網站結構</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        首頁
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/about-us">
                                        關於我們
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to="/contact">
                                        聯絡我們
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>相關介紹</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/events">
                                        最新消息
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        我們提供的服務
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>聯絡方式</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    台北市信義區基隆路一段888號 <br /> Taiwan
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+1 (123) 456 7890">+1 (123) 456 7890</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:askme@jumbofun.fun">askme@jumbofun.fun</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong>Jumbofun</strong> 保留相關權利 </p>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;