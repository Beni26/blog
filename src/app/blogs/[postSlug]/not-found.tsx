import { Button } from "@/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const NotFoundPost = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center  p-6">
      <h1 className="text-4xl font-extrabold text-gray-400 mb-4 select-none ">
        پست پیدا نشد !
      </h1>
      <p className="text-md text-gray-700 mb-6 text-center max-w-md">
        پست مورد نظر شما وجود ندارد یا حذف شده است. لطفاً آدرس را بررسی کنید یا
        به صفحه قبل برگردید.
      </p>
      <Link href="/blogs">
        <Button
          size="lg"
          className="hover:cursor-pointer font-semibold shadow-md  "
        >
          <MoveRight />
          رفتن به صفحه پست ها
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPost;
