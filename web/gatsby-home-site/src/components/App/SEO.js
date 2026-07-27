import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Jumbofun - Gatsby 實戰範例</title>
                <meta name="description" content="這是一個網站建構範例" />
                <meta name="og:title" property="og:title" content="這是一個網站建構範例"></meta>
                <meta name="twitter:card" content="這是一個網站建構範例"></meta>
                <link rel="canonical" href=" "></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO
