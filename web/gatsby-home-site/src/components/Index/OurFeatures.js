import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import serviceIcon1 from '../../assets/images/services/service-icon1.png'
import serviceIcon2 from '../../assets/images/services/service-icon2.png'
import serviceIcon3 from '../../assets/images/services/service-icon3.png'
import serviceIcon4 from '../../assets/images/services/service-icon4.png'
import serviceIcon5 from '../../assets/images/services/service-icon5.png'
import serviceIcon6 from '../../assets/images/services/service-icon6.png'

const OurFeatures = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="feature" /> 
                        Our Features
                    </span>

                    <h2>我們的專業，竭誠為您服務!</h2>
                    <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon1} alt="feature" />
                            </div>
                            <h3>資料視覺化儀表板</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon2} alt="feature" />
                            </div>
                            <h3>最佳方案計算</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon3} alt="feature" />
                            </div>
                            <h3>影像辨識模型</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon4} alt="feature" />
                            </div>
                            <h3>爬蟲模型建置</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon5} alt="feature" />
                            </div>
                            <h3>語音辨識系統</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={serviceIcon6} alt="feature" />
                            </div>
                            <h3>藥物前導模型設計</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFeatures