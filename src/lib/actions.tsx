"use server";

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { initialStateType } from "app/blogs/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export type CreateCommentProps = {
  postId: string;
  parentId?: string | null;
  formData: FormData;
};

export const createComment = async (
  prevState: initialStateType,
  { postId, parentId = null, formData }: CreateCommentProps
) => {
  const cookiesStore = cookies();
  const options = setCookieOnReq(await cookiesStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[postSlug]");
    return {
      message,
    };
  } catch (err: any) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
};
