// Basic types
type Document = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
};

type Reference<T> = {
  _ref: string;
  _type: "reference";
};

type Slug = {
  current: string;
};

type Image = {
  asset: Reference<any>;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

// Interfaces
export interface Author extends Document {
  name: string;
  bio?: string;
  image?: Image;
}

export interface Category extends Document {
  title: string;
  description?: string;
}

export interface Block {
  _type: "block";
  children: Array<{
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  list?: "bullet" | "number";
}

export interface PostData extends Document {
  title: string;
  slug: Slug;
  author: Author; // Changed from Reference<Author>
  mainImage: Image;
  categories: Category[]; // Changed from Reference<Category>[]
  publishedAt: string;
  body: Block[];
}

// Helper type for API responses
export type SanityResponse<T> = T & Document;
