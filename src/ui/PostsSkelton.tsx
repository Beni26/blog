import { Skeleton } from "./skeleton";

const PostsSkelton = () => {
  return (
    <div className="grid grid-cols-4   gap-4  mt-10">    
      {[...Array(8)].map((_, i) => (
        <div className="flex flex-col items-center space-y-3 border p-2 rounded-xl animate-pulse" key={i}>
          <Skeleton className="h-[125px] w-[200px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostsSkelton;
