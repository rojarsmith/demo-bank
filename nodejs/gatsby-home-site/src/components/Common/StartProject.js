import React from 'react'
import { Link } from 'gatsby'
import start1 from '../../assets/images/project-start1.png'
import shape9 from '../../assets/images/shape/vector-shape9.png'
import shape10 from '../../assets/images/shape/vector-shape10.png'

const StartProject = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src={start1} alt="about" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>我們迫不及待想要與您展開一個驚天動地的案子</h2>
                            <p>Make fun for the world!  Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>

                            <Link to="/contact" className="default-btn">
                                <i className="flaticon-web"></i> 
                                啟動聊聊
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape9">
                <img src={shape9} alt="about" />
            </div>
            <div className="vector-shape10">
                <img src={shape10} alt="about" />
            </div>
        </div>
    )
}

export default StartProject