import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="服務內容細節" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="服務細節" 
            />
            <ServiceDetailsContent />
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details