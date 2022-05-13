import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServicesOne from '../components/Services/ServicesOne'
import StartProject from '../components/Common/StartProject'

const Services = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="我們提供的服務" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="服務內容" 
            />
            <ServicesOne />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Services