import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>我們地址</h3>
                            <p>Taiwan 台北市信義區基隆路一段888號</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>電話和信箱</h3>
                            <p>Mobile: <a href="tel:+1 (123) 456 7890">+1 (123) 456 7890</a></p>
                            <p>E-mail: <a href="mailto:askme@jumbofun.fun">askme@jumbofun.fun</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>營業時間</h3>
                            <p>星期一 - 星期五: 09:00 - 18:00</p>
                            <p>星期六 & 星期天: 10:30 - 12:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo