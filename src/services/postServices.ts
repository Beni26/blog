import { Post } from "app/blogs/types";

export const getPostBySlug = async(slug:string)=>{
 const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post }: { post?: Post } = data || {};
  return post
}
// export const getPosts = async()=>{
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
//   const { data } = await res.json();
//   const { posts }: { posts?: Post[] } = data || [];

//   return posts
// }
export const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    
    const { data } = await res.json();
   const { posts }: { posts?: Post[] } = data || [];

    return posts;
  } catch (error) {
    console.error('❌ Error fetching posts:', error);
    return []; // جلوگیری از crash شدن بیلد
  }
};