import Date from './Date'
import Link from 'next/link'

export default function PostPreview({ title, date, slug }) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-1 leading-snug sm:leading-tight">
        <Link href={`/${slug}`} dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
      <div className="font-light text-xs sm:text-sm">
        <Date dateString={date} />
      </div>
    </div>
  )
}
