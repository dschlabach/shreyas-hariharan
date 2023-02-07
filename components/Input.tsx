import React from 'react'

const Input = ({ value = '', setValue, className = '' }: { value: string; setValue: Function; className?: string }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Enter email"
        className={`font-sans rounded-sm placeholder-ui-taupe-gray bg-secondary h-12 w-60 px-4 text-sm font-light border border-transparent focus:border-white focus:outline-none focus:ring-0 ${
          className ? className : ''
        }`}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}

export default Input
