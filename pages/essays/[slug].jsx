import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../../components/PostBody'
import MoreStories from '../../components/MoreStories'
import PostHeader from '../../components/PostHeader'
import PostTitle from '../../components/PostTitle'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Subscribe from 'components/Subscribe'

export default function Post({ post, posts }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="prose max-w-3xl">
            <Head>
              <title>{post.title} | Shreyas Hariharan</title>
              <meta property="og:image" content={post.featuredImage?.node.sourceUrl} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              categories={post.categories}
            />
            <PostBody content={post.content} />
          </article>
          <div className="my-8 sm:hidden">
            <Subscribe />
          </div>
          <hr className="border-accent-2 my-16 sm:mt-28 sm:mb-24" />{' '}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </div>
  )
}

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/essays/${node.slug}`) || [],
    fallback: true,
  }
}
