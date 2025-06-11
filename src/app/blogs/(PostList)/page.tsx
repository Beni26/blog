import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import { Suspense } from "react";
import PostsSkelton from "@/ui/PostsSkelton";

// export const experimental_ppr = true

const BlogPage = async () => {
  const cookieStore = cookies();
  const options = setCookieOnReq(await cookieStore);
  const posts = await getPosts(options as RequestInit);

  return (
    <div>
      <Suspense fallback={<PostsSkelton />}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
};
export default BlogPage;
