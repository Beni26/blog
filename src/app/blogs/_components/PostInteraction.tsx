"use client";

import { likePost } from "@/services/postServices";
import { Button } from "@/ui/button";
import { toPersianDigits } from "@/utils/numberFormatter";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Bookmark, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import animationData from "@/lotties/like.json";

type comentsCountProps = {
  commentsCount: number;
  _id: string;
  isLiked: boolean;
};

const PostInteraction: React.FC<comentsCountProps> = ({
  commentsCount,
  _id,
  isLiked,
}) => {
  const router = useRouter();

  // حالت داخلی برای like کردن با امکان کنترل انیمیشن
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [liked, setLiked] = useState(isLiked);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (!lottieRef.current) return;
    const totalFrames = lottieRef.current.getDuration(true) ?? 10;
    lottieRef.current.goToAndStop(liked ? totalFrames : 0, true);
  }, []);

const likeHandler = async (postId: string) => {
  try {
    const totalFrames = lottieRef.current?.getDuration(true) ?? 10;

    if (liked) {
      lottieRef.current?.setSpeed(1.5);
      lottieRef.current?.playSegments([totalFrames, 0], true);
    } else {
      lottieRef.current?.setSpeed(1);
      lottieRef.current?.playSegments([0, totalFrames], true);
    }

    setLiked((prev) => !prev);
    await likePost(postId);
    router.refresh();
  } catch (error) {
    const err = error as any;
    const errMsg = err?.response?.data?.message || "خطا در عملیات";
    toast.error(errMsg);
  }
};


  return (
    <div className="flex  gap-3">
      <Button
        className="hover:cursor-pointer w-[50px] h-[40px]"
        variant="outline"
      >
        <MessageSquare /> {toPersianDigits(commentsCount)}
      </Button>

      <Button
        className="hover:cursor-pointer p-0 flex items-center justify-center w-[50px] h-[40px] relative"
        variant="outline"
        size="sm"
        onClick={() => likeHandler(_id)}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="absolute -top-2.5 stroke-1 stroke-red-600 bg-white"
        />
      </Button>
      {/* <Button onClick={()=>lottieRef?.current?.goToAndStop(54, true)}>GoToo</Button> */}
      <Button
        className="hover:cursor-pointer w-[50px] h-[40px]"
        variant="outline"
      >
        <Bookmark />
      </Button>
    </div>
  );
};

export default PostInteraction;
