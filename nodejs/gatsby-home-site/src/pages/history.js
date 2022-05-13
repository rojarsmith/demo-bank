import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistoryContentOne from '../components/History/OurHistoryContentOne'


const History = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="我們的歷史足跡" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="歷史" 
            />
            <OurHistoryContentOne />
            
            <Footer />
        </Layout>
    );
}

export default History