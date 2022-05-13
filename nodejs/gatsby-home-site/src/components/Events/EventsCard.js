import React from 'react'
import {Link} from 'gatsby'
import event1 from '../../assets/images/events/event1.jpg'
import event2 from '../../assets/images/events/event2.jpg'
import event3 from '../../assets/images/events/event3.jpg'
import event4 from '../../assets/images/events/event4.jpg'
import event5 from '../../assets/images/events/event5.jpg'
import event6 from '../../assets/images/events/event6.jpg'
import event7 from '../../assets/images/events/event7.jpg'
import event8 from '../../assets/images/events/event8.jpg'
import event9 from '../../assets/images/events/event9.jpg'

const EventsCard = () => {
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event1} alt="event" />
                                </Link>
                                <span className="date">禮拜三, 20 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        國際AI年會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 溫哥華, 加拿大
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event2} alt="event" />
                                </Link>
                                <span className="date">禮拜四, 19 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        AI世界開發者大會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 雪梨, 澳洲
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event3} alt="event" />
                                </Link>
                                <span className="date">禮拜一, 18 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        機器人AI黑克松
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 伊斯坦堡,土耳其
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event4} alt="event" />
                                </Link>
                                <span className="date">禮拜日, 17 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        國際藥物AI開發研討會
                                    </Link>
                                </h3>

                                <span className="location">
                                    <i className="bx bx-map"></i> 雅典, 希臘
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event5} alt="event" />
                                </Link>
                                <span className="date">禮拜六, 16 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        AI倫理討論會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 羅馬, 義大利
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event6} alt="event" />
                                </Link>
                                <span className="date">禮拜五, 15 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Covid-19 序列 AI分析討論會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 東京, 日本
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event7} alt="event" />
                                </Link>
                                <span className="date">禮拜四, 14 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        ML開發者大會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 台北, 台灣
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event8} alt="event" />
                                </Link>
                                <span className="date">禮拜三, 13 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Iot 開發年會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 哥本哈根, 丹麥
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link to="/event-details" className="d-block">
                                    <img src={event9} alt="event" />
                                </Link>
                                <span className="date">禮拜四, 12 May, 2022</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/event-details">
                                        Gatsby 開發者大會
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> 倫敦, 英國
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsCard