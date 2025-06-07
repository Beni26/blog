import { Suspense } from "react";
import PostList from "../_components/PostList";
import PostsSkelton from "@/ui/PostsSkelton";

export const experimental_ppr = true

const BlogPage = async () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed
        cum perferendis perspiciatis eligendi adipisci error ipsam natus
        molestiae non suscipit similique, architecto repudiandae, hic facere
        distinctio est veritatis quaerat.
      </p>
      <Suspense fallback={<PostsSkelton />}>
        <PostList />
      </Suspense>
    </div>
  );
};
export default BlogPage;
