import React from 'react'
import Header from 'components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen text-light py-10 px-4 md:px-24">
      <div className="md:max-w-4xl mx-auto grid gap-y-10 md:gap-y-24">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
