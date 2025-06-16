"use client";
import Avatar from "@/ui/Avatar";
import { CommentAnswer, Comment as CommentType } from "../../types";
import { Button } from "@/ui/button";
import { LogIn, Reply } from "lucide-react";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "context/AuthContext";

type CommentProps<T extends CommentType | CommentAnswer> = {
  comment: T;
  postId?: string;
};

const Comment = <T extends CommentType | CommentAnswer>({
  comment,
  postId,
}: CommentProps<T>) => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleOpen = () => {
    if (!user) {
      toast.error(
        <div className="flex items-center gap-2">
          <span className="text-sm"> برای ثبت پاسخ ابتدا وارد شوید</span>
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
    <>
      <div className="flex items-center justify-between mb-5 border-b pb-2">
        <div className="flex items-center">
          <Avatar
            src={comment.user.avatarUrl}
            alt={comment.user.name || "-"}
            width={34}
          />
          <div className="text-sm w-full">
            <span className="font-bold block mb-1 ">{comment.user.name}</span>
            <span className="block text-xs text-gray-600">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <CommentForm
              title=" پاسخ به نظر"
              description={comment.user.name}
              parentId={comment._id}
              postId={postId || ""}
              onClose={(flag) => setOpen(flag)}
              open={open}
            >
              <Button className="ml-2" onClick={handleOpen}>
                <Reply /> <span>پاسخ</span>
              </Button>
            </CommentForm>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm">{comment.content.text}</p>
      </div>
    </>
  );
};
export default Comment;
