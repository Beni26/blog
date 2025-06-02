import Image from "next/image";
import { Post } from "../types";
import { notFound } from "next/navigation";

const SinglePost = async ({
  params,
}: {
  params: Promise<{ postSlug: string }>;
}) => {
  const { postSlug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${postSlug}`
  );
  const { data } = await res.json();
  const { post }: { post?: Post } = data || {};

  if (!post) {
    notFound();
  }
  return (
    <div className="max-w-screen-md w-full mx-auto">
      <div>
        <h1 className="font-bold text-2xl mb-8">{post.title}</h1>
        <p className="mb-4">{post.briefText}</p>
        <p className="mb-8">{post.text}</p>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
          <Image
            src={post.coverImageUrl}
            className="object-cover object-center hover:scale-110 transition-all duration-300"
            alt={post.title}
            fill
          />
        </div>
      </div>
    </div>
  );
};
export default SinglePost;
