import React from 'react'
import Header from 'components/Header'
import useDarkMode from 'lib/useDarkMode'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, toggle } = useDarkMode()

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
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
