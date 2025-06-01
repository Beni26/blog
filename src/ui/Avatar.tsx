import Image from "next/image";

type AvtarProps = {
  src: string;
  width?: number;
  alt:string
};
const Avatar: React.FC<AvtarProps> = ({ src, width = 24 ,alt}) => {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-full ring-1 ml-2"
      alt={alt}
    />
  );
};
export default Avatar;
