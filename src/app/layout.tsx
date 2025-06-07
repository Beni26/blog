import type { Metadata } from "next";
import "@/styles/globals.css";
import { VazirFont } from "constants/localFont";
import Header from "@/components/Header";
import { Toaster } from "@/ui/sonner";
import AuthProvider from "context/AuthContext";

export const metadata: Metadata = {
  title: {
    template: " %s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت  بلاگ ها و نظرات کاربران",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${VazirFont.variable} font-sans min-h-screen`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <Header />
          <div className="container mx-auto  xl:max-w-screen-xl  flex flex-1 flex-col">
            {children}
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              classNames: {
                toast: "text-gray-800",
                success:
                  "bg-green-50 border border-green-200 text-green-800 [&>div>svg]:text-green-500",
                error:
                  "bg-red-50 border border-red-200 text-red-800 [&>div>svg]:text-red-500",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
