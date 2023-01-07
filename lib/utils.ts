// Write a function to convert a timestamp of this format 2022-10-14T23:11:24 to a human-readable string like "October 14, 2022 at 11:11 PM"

export const formatDate = (date: string): string => {
  const d = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  // @ts-ignore
  return d.toLocaleString('en-US', options)
}
