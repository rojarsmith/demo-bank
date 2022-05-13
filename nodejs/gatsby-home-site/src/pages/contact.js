import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'
const Contact = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="讓我們來聊聊天吧!!" 
                homePageText="首頁" 
                homePageUrl="/" 
                activePageText="聯絡我們" 
            />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </Layout>
    );
}

export default Contact