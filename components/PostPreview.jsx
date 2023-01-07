import Date from './Date'
import Link from 'next/link'

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-1 leading-snug">
        <Link href={`/essays/${slug}`} className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
      <div className="text-base font-medium mb-4">
        <Date dateString={date} />
      </div>
      <div className="text-lg font-light leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}
