import Link from "next/link";
import { Post } from "../types";
import CoverImage from "./CoverImage";
import { Clock } from "lucide-react";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";
import { cookies } from 'next/headers';
import setCookieOnReq from "@/utils/setCookieOnReq";

const PostList = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  // const {
  //   data: { posts },
  // }: { data: { posts: Post[] } } = await res.json();
  const cookieStore= cookies();
  const options = setCookieOnReq(await cookieStore)
  const posts = await getPosts(options as RequestInit)
  return (
    <div className="grid grid-cols-12 gap-8 mt-5 mb-5 p-5 md:p-0">
      {posts?.map((post : Post) => (
        <div
          key={post._id}
          className="col-span-12   sm:col-span-6 lg:col-span-4 border p-2 rounded-lg space-y-4"
        >
          <CoverImage {...post} />
          <Link href={`/blogs/${post.slug}`} className="mb-4 font-bold block">
            <h2>{post.title}</h2>
          </Link>
          <div className="flex justify-between">
            <Author {...post.author} />
            <div className="flex items-center text-[10px] space-x-1 text-gray-600">
              <Clock size={17} />
              <span> خواندن :</span>
              <span className="leading-3">{post.readingTime}</span>
              <span>دقیقه</span>
            </div>
          </div>
          <PostInteraction {...post} />
        </div>
      ))}
    </div>
  );
};
export default PostList;
