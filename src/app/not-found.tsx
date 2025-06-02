"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { Button } from "@/ui/button";
import { MoveRight } from "lucide-react";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="flex flex-1 flex-col justify-center items-center  p-6">
      <h1 className="text-9xl font-extrabold text-gray-400 mb-1 select-none animate-bounce">404</h1>
      <div className="flex flex-col gap-6 items-center  max-w-md w-full text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          صفحه مورد نظر پیدا نشد. لطفاً آدرس را بررسی کنید یا به صفحه قبل برگردید.
        </p>
        <Button
          onClick={moveBack}
          size="lg"
          className="hover:cursor-pointer font-semibold shadow-md  "
        >
            <MoveRight />
          برگشت
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
