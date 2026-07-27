import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function header() {
    return (
        <StaticQuery
            query={graphql`
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
        `}
            render={data => {
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
            }}
        />
    )
}