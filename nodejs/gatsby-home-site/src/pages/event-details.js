import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Events/EventDetailsContent'
import EventSpeakers from '../components/Events/EventSpeakers'

const EventDetails = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="活動細節" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="活動細節" 
            />
            <EventDetailsContent />
            <EventSpeakers />
            <Footer />
        </Layout>
    );
}

export default EventDetails;