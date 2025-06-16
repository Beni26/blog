"use client";
import { Button } from "@/ui/button";
import { Comment as CommentType, CommentAnswer, Post } from "../../types";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { CircleHelp, LogIn } from "lucide-react";
import { useState } from "react";
import { useAuth } from "context/AuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PostComment = ({ post }: { post: Post }) => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleOpen = () => {
    if (!user) {
      toast.error(
        <div className="flex items-center gap-2">
          <span className="text-sm"> برای ثبت نظر  ابتدا وارد شوید</span>
          <Button
            className="hover:cursor-pointer"
            onClick={() => router.push("/signin")}
            size="sm"
          >
            <LogIn /> صفحه ورود
          </Button>
        </div>
      );
      return;
    }
  };

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-lg">نظرات</h1>
        <div>
          <CommentForm
            title="نظر جدید"
            description="نظر خود را وارد کنید"
            postId={post._id}
            onClose={(flag) => setOpen(flag)}
            open={open}
          >
            <Button size="lg" onClick={handleOpen}>
              <CircleHelp className="ml-2" />
              ثبت نظر جدید
            </Button>
          </CommentForm>
        </div>
      </div>
      {post.comments.length > 0 &&
        post.comments.map((comment) => (
          <div key={comment._id}>
            <div className="border rounded-xl p-2 sm:p-4">
              <Comment<CommentType> comment={comment} postId={post._id} />
            </div>
            <div className="mr-7  mb-3">
              {comment.answers.map((item) => (
                <div
                  className="relative p-3   space-y-3 before:absolute before:top-0 before:bottom-0 before:-right-3 before:w-[2px] before:bg-gray-200"
                  key={item._id}
                >
                  <div className="border border-gray-200 rounded-xl p-2 smsm:p-4 relative before:absolute before:top-1/2 before:-right-6 before:w-[24px] before:h-[2px] before:bg-gray-200 ">
                    <Comment<CommentAnswer> comment={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
export default PostComment;
