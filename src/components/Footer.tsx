export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-4 mt-10 transition-colors duration-300">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} UICT Blog. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:underline ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
