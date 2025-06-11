import { getPosts } from "@/services/postServices";
import PostList from "app/blogs/_components/PostList";
import queryString from "query-string";

const CategorySlug = async ({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { categorySlug } = await params;
  const searcParamsText = await searchParams;
  const queries = `${queryString.stringify(
    searcParamsText
  )}&categorySlug=${categorySlug}`;
  
  const posts = await getPosts(undefined, queries);

  return (
    <div>
      {posts?.length === 0 ? (
        <p>پستی در این دسته بندی پیدا نشد</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};
export default CategorySlug;
