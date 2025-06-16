"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import { toast } from "sonner";
import { useEffect, useActionState } from "react";
import { initialStateType } from "app/blogs/types";

type CommentFormProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  postId: string;
  parentId?: string | null;
  onClose: (flag: boolean) => void;
  open: boolean;
};

const initialState: initialStateType = { message: "" };

const CommentForm: React.FC<CommentFormProps> = ({
  title,
  description,
  children,
  postId,
  parentId,
  onClose,
  open,
}) => {
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={onClose} >
      {children}

      <DialogContent className="sm:max-w-[425px] font-sans" >
        <form
          className="grid gap-4"
          // action={createComment.bind(null, postId, parentId)}
          action={async (formData) => {
            await formAction({ formData, postId, parentId });
          }}
        >
          <DialogHeader className="!text-right border-b-2 pb-2">
            <DialogTitle>{title} </DialogTitle>
            <DialogDescription> {description} </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3">
            <Label htmlFor="comment">متن نظر</Label>
            <Textarea
              id="comment"
              name="text"
              className="h-32"
              placeholder="نظر خود را تایپ کنید ..."
            />
          </div>

          <DialogFooter className="pt-4">
            <SubmitButton className=" w-full hover:cursor-pointer">
              تایید نظر
            </SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CommentForm;
