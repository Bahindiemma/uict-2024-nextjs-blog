# UICT 2024 Next.js 14 Blog Project

## Project Overview

This repository contains the final project for the UICT React Mentorship Class of 2024. It's a modern, full-featured blog platform built using Next.js 14 with App Router, Tailwind CSS, and MongoDB.

## Features

- User authentication and profile management
- Create, read, update, and delete blog posts
- Comments and interaction system
- Categories and tags for content organization
- Search functionality
- Responsive design with dark mode support

## Technology Stack

- Frontend: Next.js 14 (App Router), React, Tailwind CSS
- Backend: Next.js API Routes
- Database: MongoDB
- Authentication: NextAuth.js
- Deployment: Vercel (recommended)

## Project Structure

```
/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   └── page.js
│   │   └── layout.js
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   ├── create/
│   │   │   └── page.js
│   │   └── page.js
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js
│   │   ├── posts/
│   │   │   └── route.js
│   │   └── comments/
│   │       └── route.js
│   ├── search/
│   │   └── page.js
│   ├── profile/
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── PostCard.js
│   ├── CommentSection.js
│   └── SearchBar.js
├── lib/
│   ├── mongodb.js
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
├── public/
├── styles/
│   └── globals.css
├── next.config.js
└── tailwind.config.js
```

## Key Components and Pages

### App Router Structure

We're using Next.js 14's App Router for improved routing and layouts:

- `app/layout.js`: The root layout that wraps all pages.
- `app/page.js`: The home page of the blog.

### Blog Pages

1. Blog Listing (`app/blog/page.js`):
   - Displays a list of blog posts.
   - Implements pagination.
   - Allows filtering by category or tag.

2. Blog Post Detail (`app/blog/[slug]/page.js`):
   - Shows full content of a single blog post.
   - Displays comments and allows adding new comments.
   - Implements dynamic OG image generation for social sharing.

3. Create/Edit Post (`app/blog/create/page.js`):
   - Form for creating new blog posts or editing existing ones.
   - Implements rich text editing.

### Authentication

- Login (`app/(auth)/login/page.js`) and Register (`app/(auth)/register/page.js`) pages.
- Uses NextAuth.js for authentication (`app/api/auth/[...nextauth]/route.js`).

### API Routes

- Posts API (`app/api/posts/route.js`): Handles CRUD operations for blog posts.
- Comments API (`app/api/comments/route.js`): Manages comment functionality.

### Search Functionality

- Search Page (`app/search/page.js`): Implements full-text search across blog posts.

### User Profile

- Profile Page (`app/profile/page.js`): Allows users to view and edit their profile information.

## MongoDB Connection

We use MongoDB for our database. The connection is set up in `lib/mongodb.js`:

```javascript
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
```

This setup ensures efficient connection reuse across serverless function invocations.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB instance

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/uict-2024-nextjs-blog.git
   ```

2. Navigate to the project directory:
   ```
   cd uict-2024-nextjs-blog
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is designed to be easily deployed on Vercel. Connect your GitHub repository to Vercel for automatic deployments on every push to the main branch.

## Contributing

This project is a collaborative effort by UICT students. Please refer to CONTRIBUTING.md for our contribution guidelines.

## Team Members

- Nasir Wazir - User Authentication and Management
- Joseph - Blog Post Management
- Timo - Frontend Design and UI/UX
- Okot Emmanuel - Comments and Interaction
- Debbie - Categories, Tags, and Search

## Acknowledgements

Special thanks to our mentors and UICT for their guidance and support throughout this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
