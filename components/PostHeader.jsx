import Date from './Date'
import PostTitle from './PostTitle'
import Image from 'next/image'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className="grid gap-y-2">
      {coverImage?.node?.sourceUrl.length ? (
        <Image
          src={coverImage?.node?.sourceUrl}
          alt={`Cover Image for ${title}`}
          width={900}
          height={400}
          className="-mt-10"
        />
      ) : null}
      <div className="text-base font-bold">
        <Date dateString={date} />
      </div>
      <PostTitle>{title}</PostTitle>
    </div>
  )
}
