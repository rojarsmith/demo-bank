import React from 'react'
import { Link } from 'gatsby'
import aboutImage from '../../assets/images/about/about-img5.png'
import starIcon from '../../assets/images/star-icon.png'
import icon4 from '../../assets/images/icons/icon4.png'
import icon5 from '../../assets/images/icons/icon5.png'
import icon6 from '../../assets/images/icons/icon6.png'
import icon7 from '../../assets/images/icons/icon7.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'
 
const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    About Us
                                </span>
                                <h2>利用數據科技 驅動數位革命</h2>
                                <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                                
                                <ul className="features-list">
                                    <li>
                                        <img src={icon4} alt="banner" />
                                        <h3>10年</h3>
                                        <p>立足業界</p>
                                    </li>
                                    <li>
                                        <img src={icon5} alt="banner" />
                                        <h3>100+</h3>
                                        <p>專業團隊成員</p>
                                    </li>
                                    <li>
                                        <img src={icon6} alt="banner" />
                                        <h3>95%+</h3>
                                        <p>顧客滿意度</p>
                                    </li>
                                    <li>
                                        <img src={icon7} alt="banner" />
                                        <h3>99%</h3>
                                        <p>準時上線率</p>
                                    </li>
                                </ul>
                                <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                                
                                <Link to="/about-us" className="default-btn">
                                    <i className="flaticon-right"></i>更多詳盡資訊<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>服務產業領域</h3>
                                <p>橫跨各類型產業，各種成熟度公司，只要有心往數據革命邁進的公司，皆是我們竭力服務之對象</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> 電動車</li>
                                    <li><i className="flaticon-tick"></i> 機器人</li>
                                    <li><i className="flaticon-tick"></i> 藥物開發</li>
                                    <li><i className="flaticon-tick"></i> 腦機介面</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>我們的任務</h3>
                                <p>協助合作夥伴，系統自動化，資訊流智慧化，能夠更具焦於產業拓展的細節面!</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> 策略方案設計</li>
                                    <li><i className="flaticon-tick"></i> 資料建置方案</li>
                                    <li><i className="flaticon-tick"></i> 模型設計測試</li>
                                    <li><i className="flaticon-tick"></i> 推薦引擎模擬</li>
                                </ul>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>我們是誰</h3>
                                <p>專業、負責和認真是我們提供給合作夥伴唯一的保證，讓您完全無後顧之憂!</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> 跨領域的團隊組成</li>
                                    <li><i className="flaticon-tick"></i> 豐富的專案導入經驗</li>
                                    <li><i className="flaticon-tick"></i> 深入了解夥伴流程的同理心</li>
                                    <li><i className="flaticon-tick"></i> 準時上線的責任感</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;