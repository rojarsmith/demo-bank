import React from 'react'
import ServiceSidebar from './ServiceSidebar'
import details1 from '../../assets/images/services/services-details1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import charts from '../../assets/images/services/charts.jpg'

const ServiceDetailsContent = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src={details1} alt="about" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">AI & ML 模型開發</span>
                            <h3>為什麼我們需要AI模型</h3>
                            <p>一旦您將模型定型之後，就可以使用它來因應先前未看到的資料，並對這些資料進行預測。 例如，假設您想要建立可根據其臉部運算式辨識使用者表情的應用程式。 您可以將模型提供給每個標記有特定表情的臉部影像來定型模型，然後您可以在可辨識任何使用者表情的應用程式中使用該模型。</p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src={project2} alt="about" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>服務開發流程</h3>
                                        <ul>
                                            <li>需求問題釐清</li>
                                            <li>資料架構設計</li>
                                            <li>資料蒐集方式</li>
                                            <li>資料清洗</li>
                                            <li>模型開發</li>
                                            <li>上線應用</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p>因此，如果想知道需要多少訓練數據（Training Data），建議先釐清：這個AI專案到底要處理什麼問題，以及這個問題有多複雜？確定之後，再來判斷應該選用哪種程度的模型來做訓練。根據不同的商業命題複雜度，用不同複雜度的模型和精準數據彼此搭配，找出最佳平衡，才能讓AI專案順利落地。</p>
                            <h3>應用場域</h3>

                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        製造流程
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        醫療保健
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        電動車
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        金融財務
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        不動產
                                    </div>
                                </div>
            
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        運輸配送
                                    </div>
                                </div>
                            </div>

                            <h3>我們應用的科技</h3>
                            <ul className="technologies-features">
                                <li><span>JavaScript</span></li>
                                <li><span>Python</span></li>
                                <li><span>Java</span></li>
                                <li><span>C/CPP</span></li>
                                <li><span>PHP</span></li>
                                <li><span>Swift</span></li>
                                <li><span>C# (C- Sharp)</span></li>
                                <li><span>Ruby</span></li>
                                <li><span>SQL</span></li>
                            </ul>
                            <div className="charts-image">
                                <img src={charts} alt="about" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetailsContent