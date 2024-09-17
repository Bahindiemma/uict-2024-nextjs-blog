import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { PostData, SanityResponse, Category } from "@/lib/interface";
import { PortableText } from "@portabletext-typed/react";

async function getPost(slug: string): Promise<SanityResponse<PostData> | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->{
      _id,
      title
    }
  }`;

  return client.fetch(query, { slug });
}

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description:
      post.body.find((block) => block._type === "block")?.children[0]?.text ||
      "",
    openGraph: {
      images: [urlFor(post.mainImage).width(1200).height(630).url()]
    }
  };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  return (
    <>
      <main className="container mx-auto px-4 md:px-6 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="mb-4 text-gray-600 dark:text-gray-400">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
            )}
            {post.author && <span> by {post.author.name}</span>}
          </div>
          {post.mainImage && (
            <div className="mb-8">
              <Image
                src={urlFor(post.mainImage).width(800).height(500).url()}
                alt={post.title}
                width={800}
                height={500}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="prose text-gray-900 text-2xl text-justify dark:text-white dark:prose-invert max-w-none">
            <PortableText value={post.body} />
          </div>
          {post.categories && post.categories.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Categories:
              </h2>
              <ul className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <li
                    key={category._id}
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </main>
    </>
  );
}
