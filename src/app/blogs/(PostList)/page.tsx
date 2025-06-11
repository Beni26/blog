import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import { Suspense } from "react";
import PostsSkelton from "@/ui/PostsSkelton";
import queryString from "query-string";

// export const experimental_ppr = true

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const cookieStore = cookies();
  const { search } = await searchParams;

  const options = setCookieOnReq(await cookieStore);
  const queries = queryString.stringify({ search });
  const posts = await getPosts(options as RequestInit, queries);

  return (
    <div>
      {search && (
        <div className="mb-6 rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground shadow-sm">
          {posts.length === 0 ? (
            <>
              هیچ پستی برای{" "}
              <span className="font-semibold text-primary">&quot;{search}&quot;</span>{" "}
              پیدا نشد.
            </>
          ) : (
            <>
              نمایش{" "}
              <span className="font-semibold text-primary">{posts.length}</span>
              نتیجه برای{" "}
              <span className="font-semibold text-primary">&quot;{search}&quot;</span>
            </>
          )}
        </div>
      )}
      <Suspense fallback={<PostsSkelton />}>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
};
export default BlogPage;
