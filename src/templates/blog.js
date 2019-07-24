import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query ($slug: String!) {
    contentfulContentPage (slug: { eq: $slug }) {
      title
      date (formatString: "MMMM Do, YYYY")
      pageContent {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      }
    }
  }

  return(
    <Layout>
      <Head title={props.data.contentfulContentPage.title} />

      <h1>{props.data.contentfulContentPage.title}</h1>
      <span>{props.data.contentfulContentPage.date}</span>

      {documentToReactComponents(props.data.contentfulContentPage.pageContent.json, options)}
    </Layout>
  )
}

export default Blog