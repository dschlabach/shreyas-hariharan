import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Subscribe from './Subscribe'

const Header = () => {
  return (
    <div className="flex justify-between flex-wrap gap-y-6 sm:flex-nowrap mb-6 sm:mb-0">
      <h1 className="text-3xl font-bold">
        <Link href="/">Shreyas Hariharan</Link>
      </h1>
      <div className="hidden sm:flex gap-x-4">
        <Subscribe />
        <Link
          href="https://twitter.com/helloshreyas"
          className="flex justify-center items-center"
          rel="noreferrer noopener"
        >
          <Image src="/icons/twitter.svg" alt="Twitter Icon" width={22} height={18} />
        </Link>
      </div>
    </div>
  )
}

export default Header
