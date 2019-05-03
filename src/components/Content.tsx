import * as React from 'react'

export const HTMLContent: React.FC<ContentProps> = ({
  content,
  className
}) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: content as string }}
  />
)

const Content: React.FC<ContentProps> = ({
  content,
  className
}) => <div className={className}>{content}</div>

interface ContentProps {
  content: React.ReactNode
  className: string
}

export default Content
