import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="star" /> 
                        Our Solutions
                    </span>
                    <h2>您選我，是因為我們了解你的痛!</h2>
                    <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link to="/service-details">
                                    策略方案分析
                                </Link>
                            </h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>

                            <Link to="/service-details" className="view-details-btn">
                                細節內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    科技技術諮詢
                                </Link>
                            </h3>

                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link to="/service-details" className="view-details-btn">
                            細節內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                   流程規劃安排
                                </Link>
                            </h3> 

                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link to="/service-details" className="view-details-btn">
                                細節內容
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;