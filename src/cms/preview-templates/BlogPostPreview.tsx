import * as React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  entry,
  widgetFor
}) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

interface BlogPostPreviewProps {
  entry: {
    getIn: Function
  }
  widgetFor: Function
}

export default BlogPostPreview
