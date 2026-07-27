import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import history1 from '../../assets/images/history/history1.jpg'
import history2 from '../../assets/images/history/history2.jpg'
import history3 from '../../assets/images/history/history3.jpg'
import history4 from '../../assets/images/history/history4.jpg'

const OurHistoryContentOne = () => {
    return (
        <section className="history-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Our History
                    </span>
                    <h2>我們創立於 2009</h2>
                </div>

                <ol className="timeline history-timeline">
                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2009</span>
                            May 20
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>成立</h3>
                                        <p>在承德路一間小小的辦公室，只有一張辦公桌，兩張椅子，開始了我們的夢想.</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history1} alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2017</span>
                            January 14
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>拓展海外市場成功</h3>
                                        <p>開始與國際運輸業者合作，展開國際供應鏈管理分析系統的設計</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history2} alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2019</span>
                            March 25
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>資料庫工廠成立</h3>
                                        <p>全台第一座核心冷卻式資料庫工廠成立</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history3} alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="timeline-block">
                        <div className="timeline-date">
                            <span>2021</span>
                            December 10
                            <sup>th</sup>
                        </div>

                        <div className="timeline-icon">
                            <span className="dot-badge"></span>
                        </div>

                        <div className="timeline-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="content">
                                        <h3>國際肯定</h3>
                                        <p>獲選Gddgle，FezeBook等大廠肯定，全球最佳合作夥伴!!</p>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="image">
                                        <img src={history4} alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default OurHistoryContentOne