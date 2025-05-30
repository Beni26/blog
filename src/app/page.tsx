import { Button } from "@/ui/button";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title:"خانه ",
  description: "وب اپلیکشن مدیریت بلاگ ها و نظرات کاربران"
}
 
export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <h1 className="font-bold text-2xl md:text-5xl my-8 ">
        اپلیکشن مدیریت بلاگ
      </h1>
      <div className="text-lg leading-loose text-center text-gray-700">
        <p>جایی که قراره بتونی یه اپلیکشن بلاگ کامل رو مدیریت کنی!</p>
        <p>بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!</p>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="lg">
          <Link href="/blogs">مطالعه بلاگ ها</Link>
        </Button>
        <Button size="lg">
          <Link href="/profile">مدیریت بلاگ ها</Link>
        </Button>
      </div>
    </div>
  );
}
