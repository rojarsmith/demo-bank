import * as React from "react"
import { Link } from 'gatsby'
import Layout from "./components/layout"
import Item from "./components/item"
import Item1 from "./components/item1"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Index</title>
        <h1>Index page.</h1>
        <h2>This is index.</h2>
        <Link to='/about'>About</Link>
        <Item/>
        <Item1/>
      </main>
    </Layout>
  )
}

export default IndexPage
