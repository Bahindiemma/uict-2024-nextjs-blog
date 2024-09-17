import { Metadata } from "next";
import Link from "next/link";
import PostList from "@/components/PostList";
import { client } from "@/lib/sanity";
import { PostData } from "@/lib/interface";

export const metadata: Metadata = {
  title: "UICT Blog"
};

export const revalidate = 60; // ISR (Incremental Static Regeneration)

const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  author->{name},
  publishedAt,
  mainImage
}`;

async function getTopPosts(): Promise<PostData[]> {
  return client.fetch(query);
}

export default async function Home() {
  const topPosts = await getTopPosts();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white">
        <div className="container text-center mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            UICT End Of React Mentorship Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore the latest insights and learnings from our <br />
            React mentorship program
          </p>
          <a
            href="#top-blogs"
            className="bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300"
          >
            Read Top Posts
          </a>
        </div>
      </div>

      <main className="container mx-auto mt-8 px-4">
        <h2
          id="top-blogs"
          className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Top Blogs
        </h2>
        <PostList posts={topPosts} />

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300"
          >
            See More Stories
          </Link>
        </div>
      </main>
    </>
  );
}
