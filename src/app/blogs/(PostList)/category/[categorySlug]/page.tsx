import { getPosts } from "@/services/postServices";
import PostList from "app/blogs/_components/PostList";

const CategorySlug = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) => {
  const { categorySlug } = await params;

  const posts = await getPosts(undefined,categorySlug)
  console.log(posts)

  return (
    <div>
        {posts?.length === 0 ? (
            <p>پستی در این دسته بندی پیدا نشد</p>
        ) : (
            <PostList posts={posts} />
        )}
    </div>
  )
};
export default CategorySlug;
