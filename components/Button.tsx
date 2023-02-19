type htmlButtonType = 'button' | 'submit' | 'reset' | undefined

type ButtonProps = {
  children: React.ReactNode
  outline?: boolean
  href?: string
  className?: string
  htmlType?: htmlButtonType
  onClick?: Function
  disabled?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = ({
  href = undefined,
  children,
  className,
  htmlType,
  onClick = () => {
    return null
  },
  disabled,
}) => {
  const ButtonElement = href ? 'a' : 'button'
  return (
    <ButtonElement
      disabled={disabled}
      type={htmlType}
      href={href}
      {...(href ? { target: '_blank', rel: 'noopener norefferer' } : {})}
      className={`h-12 bg-primary text-light hover:bg-secondary dark:bg-light dark:hover:bg-[#A199A5] dark:text-primary text-sm px-7 py-4 inline-block transition-colors group font-bold rounded-sm ease-in-out ${
        className ? className + ' ' : ''
      }`}
      onClick={() => onClick()}
    >
      {children}
    </ButtonElement>
  )
}

export default Button
