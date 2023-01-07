import React from 'react'

const Input = ({ className = '' }: { className?: string }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Enter email"
        className={`rounded-sm placeholder-ui-taupe-gray bg-secondary h-12 w-60 px-4 text-sm font-light border border-transparent focus:border-white focus:outline-none focus:ring-0 ${
          className ? className : ''
        }`}
      />
    </>
  )
}

export default Input
