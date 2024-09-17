import { Metadata } from "next";
import Link from "next/link";
import PostList from "@/components/PostList";
import { client } from "@/lib/sanity";
import { PostData } from "@/lib/interface";

export const metadata: Metadata = {
  title: "UICT Blog - All Posts"
};

export const revalidate = 60; // ISR (Incremental Static Regeneration)

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{name},
  publishedAt,
  mainImage
}`;

async function getPosts(): Promise<PostData[]> {
  return client.fetch(query);
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 dark:from-blue-700 dark:to-purple-800">
        <div className="container text-center mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">UICT Blog</h1>
          <p className="text-xl md:text-2xl">
            Explore all our articles and insights
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="bg-gray-100 dark:bg-gray-800 py-3 px-4 transition-colors duration-300">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Home
            </Link>
            <svg
              className="fill-current w-3 h-3 mx-3 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
          </li>
          <li>
            <span className="text-gray-500 dark:text-gray-400">All Posts</span>
          </li>
        </ol>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          All Blog Posts
        </h2>
        <PostList posts={posts} />
      </main>
    </>
  );
}
