import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/images/image.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/images/image.jpg" },
  { name: "Mike Johnson", role: "Lead Developer", image: "/images/image.jpg" }
];

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Banner with Centered Text */}
      <div className="relative bg-blue-600 dark:bg-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About UICT Blog
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100 max-w-3xl">
            Empowering minds through cutting-edge insights in Information and
            Communication Technology
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-150 ease-in-out"
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
              <span className="text-gray-500 dark:text-gray-400">About</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            UICT Blog is a cutting-edge platform dedicated to exploring the
            latest trends and innovations in Information and Communication
            Technology. Our team of experts is passionate about sharing
            knowledge and insights to help our readers stay ahead in the rapidly
            evolving world of technology.
          </p>
        </section>

        {/* Team Members Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="leading-relaxed text-lg">
            At UICT Blog, our mission is to demystify complex technological
            concepts and provide actionable insights for both professionals and
            enthusiasts. We strive to foster a community of continuous learning
            and innovation, empowering our readers to harness the full potential
            of ICT in their personal and professional lives.
          </p>
        </section>
      </main>
    </div>
  );
}
