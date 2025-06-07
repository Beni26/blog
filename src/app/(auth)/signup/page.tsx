"use client";
import { Button } from "@/ui/button";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "context/AuthContext";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("نام الزامی است"),
    email: yup.string().required("ایمیل الزامی است").email("ایمیل معتبر نیست"),
    password: yup
      .string()
      .required("پسورد الزامی است")
      .min(8, "پسورد باید حداقل 4 کاراکتر باشد"),
  })
  .required();
export type FormSignupData = yup.InferType<typeof schema>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignupData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const {signup,isLoading}= useAuth();


  const onSubmit: SubmitHandler<FormSignupData> = async (data) => {
    await signup(data)
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ثبت نام{" "}
      </h1>
      <form
        className=" w-full  flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <RHFTextField<FormSignupData>
          label="نام و نام خانوادگی :"
          type="text"
          name="name"
          register={register}
          errors={errors}
          error={errors.name?.message}
        />
        <RHFTextField<FormSignupData>
          label="ایمیل :"
          type="email"
          name="email"
          errors={errors}
          register={register}
        />
        <RHFTextField<FormSignupData>
          label="رمز عبور :"
          type="password"
          name="password"
          errors={errors}
          register={register}
        />

        <div className="grid w-full max-w-sm items-center gap-3 ">
          <Button type="submit" size="lg" className="cursor-pointer" disabled={isLoading}>
            {isLoading ?   <Loader2Icon className="animate-spin" /> : "  ثبت نام"}
          </Button>
        </div>
      </form>
      <div className="text-sm text-gray-500 mt-6 flex  justify-center gap-1">
        قبلاً حساب ساخته‌اید؟
        <Link href="/signin">
          <span className="text-primary cursor-pointer hover:underline">
            ورود
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Signup;
