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
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!lottieRef.current) return;
    const totalFrames = lottieRef?.current?.getDuration(true) ?? 10;

    if (isFirstRender.current) {
      lottieRef.current.goToAndStop(isLiked ? totalFrames : 0, true);
      isFirstRender.current = false;
    } else {
      if (isLiked) {
        // اگر میخوای انیمیشن از اول تا آخر پلی بشه (پر شدن قلب)
        lottieRef.current.setSpeed(1); // یا هر عدد دلخواه

        lottieRef.current.playSegments([0, totalFrames], true);
      } else {
        // اگر میخوای انیمیشن برعکس پلی بشه (خالی شدن قلب)
        lottieRef.current.setSpeed(1.5); // سرعت بالاتر هنگام unlike

        lottieRef.current.playSegments([totalFrames, 0], true);
      }
    }
  }, [isLiked]);

  const likeHandler = async (postId: string) => {
    try {
      await likePost(postId);

      // تغییر حالت liked برای نمایش انیمیشن
      setLiked((prev) => !prev);

      // بعد از لایک یا آنلایک، رفرش صفحه (یا می‌تونی داده رو آپدیت کنی)
      router.refresh();
    } catch (error) {
      const err = error as any;
      const errMsg = err?.response?.data?.message || "خطا در عملیات";
      toast.error(errMsg);
    }
  };

  return (
    <div className="flex  gap-3">
      <Button className="hover:cursor-pointer w-[50px] h-[40px]" variant="outline" >
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

      <Button className="hover:cursor-pointer w-[50px] h-[40px]" variant="outline" >
        <Bookmark />
      </Button>
    </div>
  );
};

export default PostInteraction;
