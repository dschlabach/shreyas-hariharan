import React from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import Loader from 'components/Loader'

const Subscribe = () => {
  const [email, setEmail] = React.useState<string>('')
  const [prompt, setPrompt] = React.useState<string>('Subscribe')
  const [loading, setLoading] = React.useState(false)

  const handleEmailSubscribe = async (email: string) => {
    setLoading(true)
    const res = await fetch('/api/email', {
      method: 'POST',
      body: {
        //@ts-ignore
        email: email,
      },
    })
    if (res.status === 200) {
      setPrompt('Subscribed!')
      setLoading(false)
    } else {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }
  return (
    <form
      className="relative sm:flex sm:min-w-[400px]"
      onSubmit={e => {
        e.preventDefault()
        handleEmailSubscribe(email)
      }}
    >
      <Input value={email} setValue={setEmail} />
      <Button
        className="absolute sm:relative right-0 top-0 -ml-1 flex justify-center items-center sm:min-w-[126px]"
        htmlType="submit"
      >
        {loading ? <Loader /> : prompt}
      </Button>
    </form>
  )
}

export default Subscribe
