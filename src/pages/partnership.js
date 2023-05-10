import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <div className="main-heading">
          <h4>
            <Link to="/">{siteTitle}</Link>
          </h4>
        </div>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div class="p-2">
        <h5>Inquiry Form (Not available yet)</h5>
        <p>If you want to collaborate with me, you can send inquiry using the form below. <br></br> You'll receive response up to 48 hours.</p> 
        <div class="inquiry">
          <div class="inquiry-inputs">
          <div class="is1">
              <input placeholder="Project's title"></input>
              <input placeholder="E-mail address or phone number"></input>
              <input placeholder="Estimated budget"></input>
                <input type="file" id="upload" placeholder="h" name="file" />
          </div>
          <textarea placeholder="Short description"></textarea>
          
          </div>
          <div class="is2">
            <small>*you need to fill project name, description and contact </small>
            <div class="ins">
          <button class="inquiry-send">Send Inquiry</button>
            
            </div>
          </div>
        </div>
        
      
      </div>
      <hr />
      <Bio />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Send Inquiry" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

