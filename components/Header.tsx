import React from 'react'
import Link from 'next/link'
import Subscribe from './Subscribe'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const Header = ({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: Function }) => {
  return (
    <div className="flex justify-between flex-wrap gap-y-6 sm:flex-nowrap mb-6 sm:mb-0">
      <h1 className="text-3xl font-bold">
        <Link href="/" className="text-opacity-80 transition duration-100 ease-in-out">
          Shreyas Hariharan
        </Link>
      </h1>
      <div className="hidden sm:flex gap-x-4">
        {/* <Subscribe /> */}
        <Link
          href="https://twitter.com/helloshreyas"
          className="flex justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="dark:text-light text-primary fill-current h-6 w-6"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8571 2.13071C21.0528 2.49205 20.1885 2.73632 19.2817 2.84644C20.2078 2.28386 20.9185 1.39347 21.2532 0.332232C20.387 0.853045 19.4272 1.23084 18.4055 1.43524C17.5874 0.551821 16.4221 0 15.1324 0C12.6556 0 10.6479 2.03452 10.6479 4.5443C10.6479 4.90058 10.6878 5.24736 10.764 5.57959C7.03695 5.38975 3.73268 3.58114 1.5213 0.831529C1.13535 1.50295 0.914279 2.28322 0.914279 3.11602C0.914279 4.69238 1.70615 6.08332 2.90896 6.8984C2.17391 6.87498 1.48258 6.67058 0.878058 6.33012C0.878058 6.34911 0.878058 6.36809 0.878058 6.38708C0.878058 8.58867 2.42371 10.4251 4.47522 10.8428C4.09864 10.9466 3.70271 11.0022 3.29365 11.0022C3.00451 11.0022 2.72348 10.9738 2.44994 10.9206C3.02074 12.7261 4.67694 14.0398 6.63914 14.0765C5.1041 15.2953 3.17062 16.0218 1.06978 16.0218C0.707567 16.0218 0.350973 16.0003 0 15.9585C1.98469 17.2476 4.34158 18 6.87395 18C15.1225 18 19.6326 11.0757 19.6326 5.07081C19.6326 4.874 19.6283 4.67782 19.6195 4.48291C20.4957 3.8425 21.2557 3.04198 21.8571 2.13071Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <button onClick={() => setDarkMode((prev: boolean) => !prev)}>
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-current opacity-0 animate-fade" />
          ) : (
            <MoonIcon className="h-6 w-6 text-current opacity-0 animate-fade" />
          )}
        </button>
      </div>
      <button className="sm:hidden" onClick={() => setDarkMode((prev: boolean) => !prev)}>
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-current opacity-0 animate-fade" />
        ) : (
          <MoonIcon className="h-6 w-6 text-current opacity-0 animate-fade" />
        )}
      </button>
    </div>
  )
}

export default Header
