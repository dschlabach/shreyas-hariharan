import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAboutPageContent } from 'lib/api'
import PostBody from 'components/PostBody'
import PostTitle from 'components/PostTitle'

type AboutProps = {
  data: {
    pageBy: {
      content: string
      date: string
      title: string
    }
  }
}

const About = (props: AboutProps) => {
  return (
    <div>
      <Head>
        <title>About | Shreyas Hariharan</title>
      </Head>
      <div className="prose">
        <PostTitle>About</PostTitle>
        <PostBody content={props.data.pageBy.content} />
      </div>
    </div>
  )
}

export default About

export const getStaticProps: GetStaticProps = async ({}) => {
  const data = await getAboutPageContent()

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}
