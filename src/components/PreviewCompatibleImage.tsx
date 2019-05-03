import * as React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage: React.FC<
  PreviewCompatibleImageProps
> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Img
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

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
