import * as React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ResponsiveWrapper from '../components/ResponsiveWrapper'
import styled, { keyframes } from 'styled-components'
import { gradient } from '../variables'

export const BlogPostTemplate: React.FC<
  BlogPostTemplateProps
> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
      <div>
        <Title>{title}</Title>
        <Published>{date}</Published>
        <Gradient />
        <Description>{description}</Description>
        <StyledContentWrapper>
          <PostContent content={content} />
        </StyledContentWrapper>
        <GradientCircles />
        {tags && (
          <TagArea>
            {tags.map(tag => (
              <Tag
                key={tag + `tag`}
                to={`/tags/${kebabCase(tag)}/`}
              >
                {tag}
              </Tag>
            ))}
          </TagArea>
        )}
      </div>
    </section>
  )
}

interface BlogPostTemplateProps {
  content: React.ReactNode
  description: string
  title: string
  contentComponent?: Function
  helmet?: any
  tags?: any[]
  date: string
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResponsiveWrapper>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          date={post.frontmatter.date}
          helmet={
            <Helmet titleTemplate='%s | Blog'>
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name='description'
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      </ResponsiveWrapper>
    </Layout>
  )
}

interface BlogPostProps {
  data: {
    markdownRemark: any
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

function GradientCircles() {
  return (
    <Circles>
      <Circle />
      <Circle />
      <Circle />
    </Circles>
  )
}

const Circles = styled.div`
  display: grid;
  gap: 16px;
  margin: 40px 0;
  justify-content: center;
  grid-template-columns: 16px 16px 16px;
`

const Circle = styled.div`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;

  &:nth-child(1) {
    background: #5c5cea;
  }

  &:nth-child(2) {
    background: #b063e0;
  }

  &:nth-child(3) {
    background: #f3bbf3;
  }
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 1.3;
  text-align: center;
`

const Published = styled.h6`
  font-size: 12px;
  margin-bottom: 16px;
  text-align: center;
`

const hueRotateIn = keyframes`
  from {
    filter: hue-rotate(90deg);
    width: 0;
  }
  to {
    filter: hue-rotate(0deg);
    width: 50%;
  }
`

const Gradient = styled.div`
  width: 0%;
  background: ${gradient.blue};
  height: 8px;
  margin: 16px auto 40px;
  transform: skewX(-45deg);
  animation: ${hueRotateIn} 0.5s
    cubic-bezier(0, 0.5, 0.25, 1) 0.1s 1 forwards;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Description = styled.p`
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0, 0.5, 0.25, 1) 0.2s
    1 forwards;
`

const StyledContentWrapper = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0, 0.5, 0.25, 1) 0.2s
    1 forwards;

  .gatsby-resp-image-link {
    margin: 24px 0;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 24px;
  }

  blockquote {
    margin: 16px 0;
    padding: 12px 0 12px 24px;
    border-left: 2px solid #ddd;
    color: #999;
  }

  ul,
  ol {
    padding: 12px 0 12px 40px;
  }

  ul li {
    list-style: disc;
  }
`

const TagArea = styled.div`
  /* margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #ddd; */
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
