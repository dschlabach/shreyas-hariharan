import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../components/PostBody'
import PostHeader from '../components/PostHeader'
import PostTitle from '../components/PostTitle'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api'
import Subscribe from 'components/Subscribe'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="prose dark:prose-dark max-w-2xl mx-auto">
            <Head>
              <title>{post.title} | Shreyas Hariharan</title>
              <meta property="og:type" content="website" />
              <meta property="og:title" content={`${post.title} | Shreyas Hariharan`} key="og_title" />
              <meta property="og:image" content={post.featuredImage?.node.sourceUrl} key="og_image" />
              <meta property="og:twitter" content={`${post.title} | Shreyas Hariharan`} />
              <meta property="twitter:title" content={`${post.title} | Shreyas Hariharan`} key="title" />
              <meta property="twitter:image" content={post.featuredImage?.node.sourceUrl} key="image" />
              <meta name="twitter:card" content="summary_large_image" />
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
          <div className="my-8 max-w-xl mx-auto">
            <Subscribe />
          </div>
          <hr className="my-16 sm:mt-28 sm:mb-24 dark:border-light border-primary" />
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
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  }
}
