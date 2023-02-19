import React from 'react'
import Header from 'components/Header'
import { useDarkMode } from 'usehooks-ts'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode()

  React.useEffect(() => {
    if (window?.matchMedia !== undefined) {
      // Add listener to update styles
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => enable())

      // Setup dark/light mode for the first time
      window.matchMedia('(prefers-color-scheme: dark)').matches ? () => enable() : () => disable()

      // Remove listener
      return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {})
      }
    }
  }, [])

  return (
    <div className={`${isDarkMode ? ' dark' : ''}`}>
      <div className="min-h-screen py-10 px-6 md:px-24 dark:bg-primary bg-light text-primary dark:text-light transition-colors ease-in-out duration-75">
        <div className="md:max-w-4xl mx-auto grid gap-y-10 md:gap-y-24">
          <Header darkMode={isDarkMode} setDarkMode={toggle} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
