import type { Metadata } from "next";
import "@/styles/globals.css";
import { VazirFont } from "constants/localFont";
import Header from "@/components/Header";

export const metadata:Metadata ={
  title:{
    template:" %s | بلاگ اپ",
    default:"بلاگ اپ"
  },
  description:"وب اپلیکیشن مدیریت  بلاگ ها و نظرات کاربران"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${VazirFont.variable} font-sans min-h-screen`} suppressHydrationWarning>
        <Header />
        <div className="container mx-auto  xl:max-w-screen-xl  flex flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
