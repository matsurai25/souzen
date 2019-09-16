import * as React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import ResponsiveWrapper from '../../components/ResponsiveWrapper'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <ResponsiveWrapper full>
      <Helmet title={`Tags | ${title}`} />
      <div>
        <TagTitle>Tags</TagTitle>
        {group.map(tag => (
          <Tag
            key={tag.fieldValue}
            to={`/tags/${kebabCase(tag.fieldValue)}/`}
          >
            {tag.fieldValue} ({tag.totalCount})
          </Tag>
        ))}
      </div>
    </ResponsiveWrapper>
  </Layout>
)

const TagTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Tag = styled(Link)`
  display: inline-block;
  padding: 2px 12px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
  color: #000;
  text-decoration: none;
  vertical-align: top;
  margin-right: 12px;
`

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
