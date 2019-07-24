import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContentPage ( sort: { fields: date, order: DESC } ) {
        edges {
          node {
            title
            slug
            id
            date (formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />

      <h1>Blog</h1>

      <h2>Posts:</h2>

      <ul>
        {data.allContentfulContentPage.edges.map((post) => {
          return (
            <li key={post.node.id}>
              <h2>
                <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
              </h2>
              <p>{post.node.date}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage