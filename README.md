# UICT 2024 Next.js 14 Blog Project

## Project Overview

This repository contains the final project for the UICT React Mentorship Class of 2024. It's a modern, full-featured blog platform built using Next.js 14 with App Router, Tailwind CSS, and Sanity CMS.

![UICT Blog Home Page]
<img width="1439" alt="home" src="https://github.com/user-attachments/assets/00c41cfd-7454-4f62-8604-d6af59814c96">

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
- Content Management: Sanity CMS
- Authentication: NextAuth.js
- Deployment: Vercel (recommended)

## Project Structure

```
/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   ├── create/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── about/
│   │   │   └── page.js
│   ├── contact/
│   │   │   └── page.js
│   │   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx
├── lib/
│   ├── sanity.ts
│   └── interface.ts
├── sanity/
│   ├── schemas/
│   │   ├── post.js
│   │   ├── author.js
│   │   └── comment.js
│   └── sanity.config.ts
├── public/
├── styles/
│   └── globals.css
├── next.config.ts
└── tailwind.config.ts
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

   ![Blog Listing Page]
   <img width="1439" alt="blog listing 2024-09-17 at 13 35 14" src="https://github.com/user-attachments/assets/01181c9c-af07-4289-97de-ddce6f2f9c05">

3. Blog Post Detail (`app/blog/[slug]/page.js`):
   - Shows full content of a single blog post.
   - Displays comments and allows adding new comments.
   - Implements dynamic OG image generation for social sharing.

4. Create/Edit Post (`app/blog/create/page.js`):
   - Form for creating new blog posts or editing existing ones.
   - Implements rich text editing.

## Sanity CMS Integration

We use Sanity CMS for content management. The connection is set up in `lib/sanity.js`:

```javascript
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
```

This setup allows efficient content management and delivery through Sanity's CDN.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Sanity account

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
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
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

## Screenshots

### Contact Page
![Contact Page]
<img width="1439" alt="contact" src="https://github.com/user-attachments/assets/0caa9b08-7c13-4fd0-95de-81c878ea8710">

### About Page
![About Page]
<img width="1439" alt="about" src="https://github.com/user-attachments/assets/ab5c4109-a32f-4e31-8da6-169eaa985458">

### Blog Listing Page
![Blog Listing Page]
<img width="1439" alt="blogs" src="https://github.com/user-attachments/assets/3358e90c-3b55-4f07-87d1-eb39b0b3ba0a">

### Home Page
![Home Page]
<img width="1439" alt="home" src="https://github.com/user-attachments/assets/00c41cfd-7454-4f62-8604-d6af59814c96">

## Acknowledgements

Special thanks to our mentors and UICT for their guidance and support throughout this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Make sure you have this .env.local file in your project root

```bash
NEXT_PUBLIC_SANITY_API_VERSION="2024-09-01"
NEXT_PUBLIC_SANITY_PROJECT_ID="jqw9smb7"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_BASE_URL=https://uict-students-nextjs14-blog.sanity.studio/
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
