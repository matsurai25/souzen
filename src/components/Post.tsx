import * as React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { gradient, media } from '../variables'

export default function Post({
  id,
  title,
  excerpt,
  date,
  featured,
  coverImage,
  slug
}: {
  id: string
  title: string
  excerpt: string
  date: string
  featured: boolean
  coverImage: any
  slug: string
}) {
  return (
    <Article key={id}>
      <LinkX to={slug} className='articleItem'>
        {coverImage && (
          <CoverImage
            src={coverImage.childImageSharp.fluid.src}
            alt=''
          />
        )}
        <Grid>
          <Title>
            <span>{title}</span>
          </Title>
          <Excerpt>{excerpt}</Excerpt>
          <Published>{date}</Published>
        </Grid>
      </LinkX>
    </Article>
  )
}

const Grid = styled.div`
  display: grid;
  gap: 16px;
`

const LinkX = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Article = styled.article`
  display: grid;
  gap: 16px;
  text-align: justify;
`

const background = keyframes`
  from {
    filter: hue-rotate(-30deg);
  }
  to {
    filter: hue-rotate(30deg);
  }
`

const Title = styled.h1`
  position: relative;
  line-height: 1.2;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;

  span {
    position: relative;
    z-index: 1;
    color: #333;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    z-index: 0;
    width: 0;
    height: 100%;
    background: ${gradient.blue};
    animation: ${background} 2s ease-in-out infinite
      alternate;
    transition: all 0.2s cubic-bezier(0, 1, 0.25, 1);
  }

  ${media.pc} {
    .articleItem:hover & {
      span {
        color: #fff;
      }
      &::before {
        width: 100%;
      }
    }
  }
`

const Excerpt = styled.p`
  line-height: 1.6;
  font-size: 12px;
  color: #333;
`

const Published = styled.h6`
  line-height: 1;
  font-size: 12px;
  color: #999;
`

const CoverImage = styled.img`
  width: 100%;
`
