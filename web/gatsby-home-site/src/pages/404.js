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
                pageTitle="我們好像找不到這一頁耶!!請回首頁吧!!" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="找不到這一頁" 
            />
            
            <Footer />
        </Layout>
    );
}

export default Events