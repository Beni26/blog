import { Post } from "app/blogs/types";
import http from "./httpService";

export const getPostBySlug = async(slug:string)=>{
 const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post }: { post?: Post } = data || {};
  return post
}
export const getPosts = async (options?: RequestInit, queries?: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`;


  const res = await fetch(url, options);
  const { data } = await res.json();
  const { posts }: { posts?: Post[] } = data || [];

return posts || [];
};

export const likePost=async(postId:string)=>{
  return http.post(`/post/like/${postId}`).then(({data})=>data.data)
}