import ArticleTitle from 'components/ArticleTitle'
import Head from 'next/head'
import Link from 'next/link'
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
        <meta name="description" content="Shreyas Hariharan's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid gap-y-16 sm:gap-y-24">
        <div className="flex flex-col font-light gap-y-4">
          <p className="text-lg sm:text-2xl leading-[140%]">
            I'm the co-founder of Llama, a community that works with DAOs on protocol engineering, treasury allocation,
            and analytics. We are contributing to a new economy powered by open-source software, permissionless capital
            formation, and liquid labor.
          </p>
          <Link href="/about" className="flex-shrink self-start border-b w-auto text-xs sm:text-sm">
            More about me.
          </Link>
        </div>
        <div className="grid gap-y-12 sm:gap-y-16">
          {props.allPosts.edges.map(post => (
            <ArticleTitle
              key={post.node.slug}
              title={post.node.title}
              date={formatDate(post.node.date)}
              slug={`/essays/${post.node.slug}`}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

// Get the first 20 posts from WordPress, ordered by the date
export async function getAllPostsFromWordPress() {
  //@ts-ignore
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
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
