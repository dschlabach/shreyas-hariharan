const PostBody = ({ content }) => (
  <div className="mx-auto prose-headings:opacity-80 dark:prose-a:text-white prose-a:text-primary prose-lg">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)

export default PostBody
