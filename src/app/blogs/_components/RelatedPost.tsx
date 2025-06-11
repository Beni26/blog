import { RelatedPost as RelatedType } from "../types";
import Author from "./Author";
import CoverImage from "./CoverImage";

const RelatedPost = ({ posts }: { posts: RelatedType[] }) => {
    console.log(posts)
  return (
    <div className="mb-10">
      <p className="text-x; mb-4">پست های مرتبط</p>
      <div className="grid grid-cols-6 gap-4">
        {posts.map((item) => (
          <div
            key={item._id}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <CoverImage {...item} />
            <div className="flex items-center justify-between text-xs">
              <Author {...item.author} />
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedPost;
