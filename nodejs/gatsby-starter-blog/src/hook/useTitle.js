import { useStaticQuery, graphql } from "gatsby";

const useSiteTitle = () => {
    const { site } = useStaticQuery(
        graphql`
        {
            site {
              siteMetadata {
                title
              }
            }
        }
    `)

    return site.siteMetadata
}

export default useSiteTitle