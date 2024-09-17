import Link from "next/link";
import { urlFor } from "@/lib/sanity";

interface PostCardProps {
  title: string;
  author: string;
  date: string;
  slug: { current: string };
  image: any; // Replace with a more specific type if needed
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  date,
  image,
  slug
}) => {
  // Check if image is valid before using urlFor
  const imageUrl = image ? urlFor(image).url() : "/images/mage.jpg"; // Fallback to a default image if image is null

  return (
    <div className="rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-gray-800 transition-colors duration-200">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          By {author} on {new Date(date).toLocaleDateString()}
        </p>
        <Link
          href={`/blog/${slug.current}`}
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
