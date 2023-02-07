import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time className="font-sans font-light" dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
