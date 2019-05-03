import * as React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview: React.FC<IndexPagePreviewProps> = ({
  entry,
  getAsset
}) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

interface IndexPagePreviewProps {
  entry: {
    getIn: Function
  }
  getAsset: Function
}

export default IndexPagePreview
