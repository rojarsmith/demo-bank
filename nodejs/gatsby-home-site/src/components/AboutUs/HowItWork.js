import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import process1 from '../../assets/images/process/process1.png'
import process2 from '../../assets/images/process/process2.png'
import process3 from '../../assets/images/process/process3.png'
import process4 from '../../assets/images/process/process4.png'
import process5 from '../../assets/images/process/process5.png'
import process6 from '../../assets/images/process/process6.png'
import shape from '../../assets/images/shape/circle-shape1.png'

const HowItWork = () => {
    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        How It's Work
                    </span>
                    <h2>專案運作步驟</h2>
                    <p>確實的運作步驟，璀璨的無限未來</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">1</div>
                            <div className="image">
                                <img src={process1} alt="about" />
                            </div>
                            <h3>診斷問題</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">2</div>
                            <div className="image">
                                <img src={process2} alt="about" />
                            </div>
                            <h3>收集關鍵資料</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">3</div>
                            <div className="image">
                                <img src={process3} alt="about" />
                            </div>
                            <h3>資料處理</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box ">
                            <div className="number">4</div>
                            <div className="image">
                                <img src={process4} alt="about" />
                            </div>
                            <h3>資料探索</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">5</div>
                            <div className="image">
                                <img src={process5} alt="about" />
                            </div>
                            <h3>深度分析</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-process-box">
                            <div className="number">6</div>
                            <div className="image">
                                <img src={process6} alt="about" />
                            </div>
                            <h3>行動計畫討論</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape} alt="about" />
            </div>
        </section>
    )
}

export default HowItWork