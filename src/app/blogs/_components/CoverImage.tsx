import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
  coverImageUrl: string;
  title: string;
  slug: string;
};
const CoverImage: React.FC<CoverImageProps> = ({
  coverImageUrl,
  title,
  slug,
}) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg mb-5">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          className="object-cover object-center hover:scale-110 transition-all duration-300"
          alt={title}
          fill
        />
      </Link>
    </div>
  );
};
export default CoverImage;
