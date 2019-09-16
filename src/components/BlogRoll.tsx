import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Post from './Post'

interface Props {
  data: any
}

class BlogRoll extends React.Component<Props> {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
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

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date]
          }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
            }
          }
        ) {
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
    `}
    render={data => <BlogRoll data={data} />}
  />
)
