import * as React from "react"
import { Link } from 'gatsby'
import Layout from "./components/layout"
import Item from "./components/item"
import Item1 from "./components/item1"
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <StaticImage src="../images/icon.png" alt="icon" />
        <StaticImage src="https://img.technews.tw/wp-content/uploads/2020/11/20155559/water-624x416.jpg" alt="water" />
        <title>Index</title>
        <h1>Index page.</h1>
        <h2>This is index.</h2>
        <Link to='/about'>About</Link>
        <Item />
        <Item1 />
      </main>
    </Layout>
  )
}

export default IndexPage
