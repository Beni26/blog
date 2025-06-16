export interface Category {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
type Author = {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};



type CommentContent = {
  text: string;
};

export type CommentAnswer = {
  _id: string;
  content: CommentContent;
  status: number;
  openToComment: boolean;
  createdAt: string;
  user: Author;
};
export type initialStateType =
  | { message: string; error?: undefined }
  | { error: string; message?: undefined };
  
export type Comment = {
  _id: string;
  content: CommentContent;
  status: number;
  openToComment: boolean;
  createdAt: string;
  user: Author;
  answers: CommentAnswer[];
};

export type RelatedPost = {
  _id: string;
  title: string;
  slug: string;
  category: Category;
  coverImage: string;
  coverImageUrl: string;
  author: Author;
  id: string;
};

export type Post = {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: Category;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: Author;
  related: RelatedPost[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: Comment[];
  commentsCount: number;
};

export type PostsResponse = {
  message: string;
  posts: Post[];
};
