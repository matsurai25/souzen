import * as React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage: React.FC<
  PreviewCompatibleImageProps
> = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} />

  return null
}

interface PreviewCompatibleImageProps {
  imageInfo: {
    alt?: string
    childImageSharp?: any
    image: {
      childImageSharp: any
    } | null
  }
}

export default PreviewCompatibleImage
