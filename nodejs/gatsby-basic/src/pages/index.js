import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Index</title>
      <h1>Index page.</h1>
      <Link to='/about'>About</Link>
    </main>
  )
}

export default IndexPage
