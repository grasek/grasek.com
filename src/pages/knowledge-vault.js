import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h2>Resources and materials:</h2>
      
      <div class="col">
         <div>
          <a href="../c.pdf" target="_blank" rel="noreferrer">The C Programming Language</a>
          <p>"K&R" is a timeless classic that serves as the definitive guide to the C programming language. <br></br>It presents a concise and comprehensive overview of C, covering its syntax, features, best practices, and a lot of excercises. I would recommend it as the first choice.</p>
        </div>
        
         <div>
          <a href="https://gustedt.wordpress.com/" target="_blank" rel="noreferrer">Jens Gustedt's Blog</a>
          <p>This guy knows pretty much everything about C. What's more interesting is that he shares his knowledge with us through his engagingly written blog posts!</p>
        </div>
       <div>
          <a href="https://devdocs.io/c/">(Almost) C Documentation</a>
          <p>As of today, there is no official website specifically dedicated to the official documentation of the C, similar to what exists for other languages like JavaScript. But the one is pretty close.</p>
          
           <div>
          <a href="../shell.pdf" target="_blank" rel="noreferrer">Shell Scripting Bible</a>
          <p>The name speaks for itself, everything what's important in shell. Idioms, commands, how it everything works under the hood. Great resource!</p>
          </div>
          </div>
        
        
        <div>
          <a href="../modern_c.pdf" target="_blank" rel="noreferrer">Modern C</a>
          <p>Another useful book, this one is more theoretical than the K&R book. It offers a few unique details, but to truly acquaint yourself with practical C programming, I would recommend K&R. </p>
        </div>
        
         <div>
          <a href="https://cp-algorithms.com">Algorithms Base</a>
          <p>Not strictly related to C or shell scripting, but an amazing website of most important algorithms.<br></br> Each example is clearly explained and contains a bunch of exercises.</p>
        </div>
        
        <div>
          <a>INCITS/ISO/IEC 9899</a>
          <p>If you are extremely curious about language details (or so insane that you want to write your own compiler), you might appreciate the Language Standard and Specification. <br></br>While there is no free version of this document, someone has told me that 278006613[at]tutanota[dot]com is knowledgeable about it and may be able to provide answers.</p>
        </div>

        <h6>Remember - separate the work from its fruits. Nobody cares if you read 10 books.<br></br> Get one, and that alone will make a significant difference.</h6>
        
      </div>

    </Layout>
  )
}

export const Head = () => <Seo title="Knowledge Vault" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`