"use client";
import { Button } from "@/ui/button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "context/AuthContext";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("ایمیل الزامی است").email("ایمیل معتبر نیست"),
    password: yup
      .string()
      .required("پسورد الزامی است")
      .min(8, "پسورد باید حداقل 4 کاراکتر باشد"),
  })
  .required();
export type FormSigninData = yup.InferType<typeof schema>;
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSigninData>({
    resolver: yupResolver(schema),
  });

  const { signin, isLoading } = useAuth();

  const onSubmit: SubmitHandler<FormSigninData> = async (data) => {
    await signin(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ورود به حساب کاربری
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <RHFTextField<FormSigninData>
          label="ایمیل :"
          type="email"
          name="email"
          errors={errors}
          register={register}
        />
        <RHFTextField<FormSigninData>
          label="رمز عبور :"
          type="password"
          name="password"
          errors={errors}
          register={register}
        />

        <div className="grid w-full max-w-sm items-center gap-3 ">
          <Button
            type="submit"
            size="lg"
            className="cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? <Loader2Icon className="animate-spin" /> : "  ورورد"}
          </Button>
        </div>
      </form>
      <div className="text-sm text-gray-500 mt-6 flex  justify-center gap-1">
        حساب کاربری ندارید؟
        <Link href="/signup">
          <span className="text-primary cursor-pointer hover:underline">
            ثبت‌نام
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Signin;
