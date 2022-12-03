import ArticleTitle from "components/ArticleTitle";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Shreyas Hariharan</title>
        <meta name="description" content="Shreyas Hariharan's Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid gap-y-24">
        <div className="flex flex-col font-light gap-y-4">
          <p className="text-2xl leading-[140%]">
            I'm the co-founder of Llama, a community that works with DAOs on
            protocol engineering, treasury allocation, and analytics. We are
            contributing to a new economy powered by open-source software,
            permissionless capital formation, and liquid labor.
          </p>
          <Link
            href="/about"
            className="flex-shrink self-start border-b w-auto text-sm"
          >
            More about me.
          </Link>
        </div>
        <div className="grid gap-y-16">
          <ArticleTitle
            title="Building an Economy Within a DAO"
            date="April 15, 2022"
            slug="about"
          />
          <ArticleTitle
            title="Building an Economy Within a DAO"
            date="April 15, 2022"
            slug="about"
          />
          <ArticleTitle
            title="Building an Economy Within a DAO"
            date="April 15, 2022"
            slug="about"
          />
          <ArticleTitle
            title="Building an Economy Within a DAO"
            date="April 15, 2022"
            slug="about"
          />
          <ArticleTitle
            title="Building an Economy Within a DAO"
            date="April 15, 2022"
            slug="about"
          />
        </div>
      </main>
    </div>
  );
}
