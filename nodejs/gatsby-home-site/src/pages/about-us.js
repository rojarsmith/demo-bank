import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
import HowItWork from '../components/AboutUs/HowItWork'
import Partner from '../components/AboutUs/Partner'
 
const AboutUs = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="讓我自我介紹一下吧!" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="關於我" 
            />
            <AboutUsContent />
            <WhyChooseUs />
            <HowItWork />
            <Partner />
            <Footer />
        </Layout>
    );
}

export default AboutUs;