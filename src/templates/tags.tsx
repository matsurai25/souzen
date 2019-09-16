import * as React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Post from '../components/Post'
import ResponsiveWrapper from '../components/ResponsiveWrapper'

interface Props {
  data: any
  pageContext: any
}

class TagRoute extends React.Component<Props> {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark
      .totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />
        <ResponsiveWrapper full>
          <TagHeader>{tagHeader}</TagHeader>
          <Grid>
            {posts.map(({ node: post }) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                date={post.frontmatter.date}
                featured={post.frontmatter.featuredpost}
                coverImage={post.frontmatter.featuredimage}
                slug={post.fields.slug}
              />
            ))}
          </Grid>
          <ButtonWrapper>
            <Button to='/tags/'>すべてのタグを見る</Button>
          </ButtonWrapper>
        </ResponsiveWrapper>
      </Layout>
    )
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(288px, 1fr)
  );
  gap: 40px;
  align-items: flex-start;
`

const TagHeader = styled.h3`
  font-size: 12px;
  margin-bottom: 16px;
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
`

const Button = styled(Link)`
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 1000px;
  border: 1px solid #666;
  color: #666;
  font-size: 12px;
  line-height: 1;

  &:hover {
    border: 1px solid #000;
    color: #000;
  }
`

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
