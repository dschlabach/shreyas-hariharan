import React from 'react'
import Link from 'next/link'

type ArticleTitleProps = {
  title: string
  date: string
  slug: string
}

const ArticleTitle = ({ title, date, slug }: ArticleTitleProps) => {
  return (
    <Link
      href={slug}
      className="group flex flex-col gap-y-3 border-t border-ui-dark-purple relative pt-6 transition ease-in-out duration-100 py-10 sm:py-12"
    >
      <p className="font-light text-xs sm:text-sm opacity-90 dark:opacity-60 font-sans">{date}</p>
      <h3 className="-mt-1 font-bold text-xl sm:text-3xl opacity-90">{title}</h3>
    </Link>
  )
}

export default ArticleTitle
