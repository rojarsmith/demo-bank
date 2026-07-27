import React from 'react'
import {Link} from 'gatsby'

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link to="/service-details">
                                新創公司網頁
                                </Link>
                            </h3>
                            <p>
                               Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!
                            </p>

                            <Link className="view-details-btn" to="/service-details">
                                詳細內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
   
                            <h3>
                                <Link to="/service-details">
                                AI 模型開發
                                </Link>
                            </h3>

                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                詳細內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                電子商務平台
                                </Link>
                            </h3>

                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                 詳細內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-segmentation"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                行銷資料分析顧問
                                </Link>
                            </h3>

                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                           
                            <Link className="view-details-btn" to="/service-details">
                                  詳細內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-analytics"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                製程良率分析
                                </Link>
                            </h3>

                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                  詳細內容
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>

                            <h3>
                                <Link to="/service-details">
                                科技趨勢分析
                                </Link>
                            </h3>

                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            
                            <Link className="view-details-btn" to="/service-details">
                                   詳細內容
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne