export default function PostTitle({ children }) {
  return <h1 className="text-4xl lg:text-5xl font-bold tracking mb-4" dangerouslySetInnerHTML={{ __html: children }} />
}
