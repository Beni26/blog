import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/services/postServices";

type Params = Promise<{ postSlug: string }>;



//  export const dynamicParams = false;

 export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts?.map((post)=>({postSlug : post.slug}))  || []
  return slugs
}


export async function generateMetadata({ params }: { params: Params }) {
  
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);
  return {
    title: `پست ${post?.title}`,
  };
}

const SinglePost = async ({ params }: { params: Params }) => {

  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);

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
