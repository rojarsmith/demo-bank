import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(
    graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
        }
      }
    }
  }
  `
  )
  const nodes = data.allMarkdownRemark.nodes
  return (
    <div>
      {nodes.map((node) => {
        return (
          <>
            <div>{node.frontmatter.title}</div>
            <div>{node.frontmatter.date}</div>
          </>
        )
      })}
    </div>
  )
}

export default ComponentName
