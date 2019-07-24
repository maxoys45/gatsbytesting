import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)

  return (
    <footer>
      <hr />

      <h2>Sitemap:</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <div>&copy; {data.site.siteMetadata.author} 2019</div>
    </footer>
  )
}

export default Footer