import { Skeleton } from "@/ui/skeleton";

const SinglePostSkelton = () => {
  return (
    <div className="max-w-screen-md w-full mx-auto">
      <Skeleton className="h-[20px] w-[200px]  mb-8 rounded-sm" />
      <Skeleton className="h-[15px] w-[300px] rounded-sm mb-4" />
      <Skeleton className="h-[15px] w-[500px] rounded-sm mb-8" />
      <div className=" rounded-lg mb-10">
        <Skeleton className="h-[350px] w-full" />
      </div>
    </div>
  );
};
export default SinglePostSkelton;
