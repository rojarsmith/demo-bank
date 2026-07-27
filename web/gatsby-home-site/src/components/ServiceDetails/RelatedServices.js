import React from 'react'
import { Link } from 'gatsby'
import icon1 from '../../assets/images/services/service-icon1.png'
import icon2 from '../../assets/images/services/service-icon2.png'
import icon3 from '../../assets/images/services/service-icon3.png'

const RelatedServices = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <h2>其他相關的服務</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box ">
                            <div className="icon">
                                <img src={icon1} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    數據分析
                                </Link>
                            </h3>
                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>

                            <Link to="/service-details" className="read-more-btn">
                                更詳細內容 <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon2} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    AI & ML 模型佈建
                                </Link>
                            </h3>
                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link to="/service-details" className="read-more-btn">
                                更詳細內容 <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <img src={icon3} alt="about" />
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    AI & ML網站架設
                                </Link>
                            </h3>
                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link to="/service-details" className="read-more-btn">
                                更詳細內容 <i className="flaticon-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedServices