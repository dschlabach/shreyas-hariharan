export default function PostBody({ content }) {
  return (
    <div className="mx-auto prose-headings:opacity-80 prose-a:text-white prose-lg">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
