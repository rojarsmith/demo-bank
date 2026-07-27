import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventsCard from '../components/Events/EventsCard'

const Events = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="看看最近發生了什麼事?" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="最新消息" 
            />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default Events