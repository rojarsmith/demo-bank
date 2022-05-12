import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
    console.log(data)
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

export const query = graphql`
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

export default ComponentName
