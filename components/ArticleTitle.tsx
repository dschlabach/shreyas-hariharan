import React from 'react'
import Link from 'next/link'

type ArticleTitleProps = {
  title: string
  date: string
  slug: string
}

const ArticleTitle = ({ title, date, slug }: ArticleTitleProps) => {
  return (
    <div className="group flex flex-col gap-y-3 border-t border-ui-dark-purple relative pt-6 transition duration-75 ">
      <p className="font-light text-xs sm:text-sm">{date}</p>
      <h3 className="-mt-1 font-bold text-xl sm:text-3xl">
        <Link href={slug}>{title}</Link>
      </h3>
    </div>
  )
}

export default ArticleTitle
