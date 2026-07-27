import React from 'react'
import {Link} from 'gatsby'
import payment1 from '../../assets/images/payment/payment1.png'
import payment2 from '../../assets/images/payment/payment2.png'
import payment3 from '../../assets/images/payment/payment3.png'

const EventSidebar = () => {
    return (
        <div className="events-details-info">
            <ul className="info">
                <li className="price">
                    <div className="d-flex justify-content-between align-items-center">
                        <span>費用/每位</span>
                        $149
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>座位總數</span>
                        1500
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>剩餘座位數</span>
                        350
                    </div>
                </li>
                <li>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>付款方式</span>
                        <div className="payment-method">
                            <img src={payment1} className="shadow" alt="payment-card" />
                            <img src={payment2} className="shadow" alt="payment-card" />
                            <img src={payment3} className="shadow" alt="payment-card" />
                        </div>
                    </div>
                </li>
            </ul>

            <div className="btn-box">
                <Link to="#" className="default-btn">
                    <i className="flaticon-user"></i> 
                    現在預定<span></span>
                </Link>
                <p>預約前，請先<Link to="/profile-authentication">登入</Link> </p>
            </div>

            <div className="events-share">
                <div className="share-info">
                    <span>分享本活動 <i className="flaticon-share"></i></span>

                    <ul className="social-link">
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-facebook'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-twitter'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="d-block">
                                <i className='bx bxl-linkedin'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EventSidebar