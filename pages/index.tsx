import ArticleTitle from 'components/ArticleTitle'
import Head from 'next/head'
import Link from 'next/link'
import Subscribe from 'components/Subscribe'
import { getAllPostsForHome } from '../lib/api'
import { formatDate } from '../lib/utils'

type HomeProps = {
  allPosts: {
    edges: {
      node: {
        author: {
          node: { name: string }
        }
        date: string
        excerpt: string
        featuredImage: string | null
        slug: string
        title: string
      }
    }[]
  }
  preview: boolean
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Shreyas Hariharan</title>
        <meta name="description" content="Shreyas Hariharan" key="description" />
        <meta property="og:title" content="Shreyas Hariharan" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid gap-y-16 sm:gap-y-24">
        <div className="flex flex-col font-light gap-y-4">
          <p className="text-base sm:text-lg leading-[140%] dark:text-white/80 text-primary/80">
            I'm the cofounder of Llama, a governance system for onchain organizations.
          </p>
          <Link
            href="/about"
            className="font-sans flex-shrink self-start border-b border-primary/80 dark:border-white/60 w-auto text-xs sm:text-sm transition duration-100 ease-in-out dark:text-white/60 text-primary/80"
          >
            More about me.
          </Link>
        </div>
        <div className="grid">
          {props.allPosts.edges.map(post => (
            <ArticleTitle
              key={post.node.slug}
              title={post.node.title}
              date={formatDate(post.node.date)}
              slug={`/${post.node.slug}`}
            />
          ))}
        </div>
      </main>
      <div className="mt-10 sm:hidden">
        <Subscribe />
      </div>
    </div>
  )
}

// Get the first 20 posts from WordPress, ordered by the date
export async function getAllPostsFromWordPress() {
  //@ts-ignore
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 200, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
          }
        }
      }
    }
  `)

  return data.posts
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
