import React from 'react'
import UpcomingEventTimer from './UpcomingEventTimer'
import EventSidebar from './EventSidebar'
import details from '../../assets/images/events/events-details.jpg'

const EventDetailsContent = () => {
    return (
        <section className="events-details-area pb-100">
            <div className="events-details-image">
                <img src={details} alt="details" />

                <UpcomingEventTimer />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="events-details-header">
                            <ul>
                                <li><i className='bx bx-calendar'></i>Wed, 20 May, 2020</li>
                                <li><i className='bx bx-map'></i>Taiwan，台北基隆路一段888號</li>
                                <li><i className='bx bx-time'></i>12.00PM</li>
                            </ul>
                        </div>

                        <div className="events-details-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.93670070734154!2d121.55192097799187!3d25.034508067403113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc9fd9c1aeb%3A0xdf45878319a2ade1!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5Z-66ZqG6Lev5LiA5q61ODg46Jmf!5e0!3m2!1szh-TW!2stw!4v1644981884292!5m2!1szh-TW!2stw"></iframe>
                           
                        </div>

                        <div className="events-details-desc">
                            <h3>AI模型研討會</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            <h3>交通資訊</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                            <h3>這場研討會適合你嗎?</h3>
                            <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <EventSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsContent