import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import howItWork from '../../assets/images/how-its-work.png'

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                數據革命的最佳合作夥伴
                            </span>
                            <h2>為什麼選擇我們?</h2>
                            <p>沒我們<br/>您仍然可以在自己的產業發光發亮!<br/>有我們<br/>您將展開一場跨產業的產業領導革命!</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>價值鏈審查</h3>
                                    <p>尋找產業價值鏈中，附加價值最高的區段!</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>設定行動計畫</h3>
                                    <p>往高價值段的產業鏈移動，已獲取更多可能!</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>模型設計及上線</h3>
                                    <p>讓資訊流模型開始運作，並隨時告知我們行動計劃運作進度!
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src={howItWork} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs