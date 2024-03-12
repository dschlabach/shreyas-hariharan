import React from 'react'

const Input = ({ value = '', setValue, className = '' }: { value: string; setValue: Function; className?: string }) => {
  return (
    <>
      <input
        type="email"
        placeholder="Enter email"
        className={`font-sans rounded-sm bg-ui-taupe-gray/20 border-primary/60 placeholder-primary/80 dark:placeholder-white/60 dark:bg-secondary h-12 w-full px-4 sm:text-sm font-light border dark:border-transparent dark:focus:border-white focus:outline-none focus:ring-0 ${
          className ? className : ''
        }`}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  )
}

export default Input
