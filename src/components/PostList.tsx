import Link from "next/link";
import Image from "next/image";
import { PostData } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";

interface PostListProps {
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug.current}`}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
        >
          <div className="relative h-48">
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).width(400).height(300).url()}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {post.author && `By ${post.author.name}`}
              {post.publishedAt &&
                ` on ${new Date(post.publishedAt).toLocaleDateString()}`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
