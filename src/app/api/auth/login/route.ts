// app/api/auth/signin/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import http from "@/services/httpService";
import { signinApi } from "@/services/authService";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    // ارسال اطلاعات به بک‌اند اصلی (مثلاً Nest.js)
    // const response = await http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signin`, body);
    const response = await signinApi(body);

    const { user, message, cookies } = response;
    const res = NextResponse.json(
      { user, message },
      { status: 200 }
    );

    // کوکی‌ها رو از response بک‌اند بخون و ست کن
    cookies.forEach(({ name, value, options }: any) => {
      res.cookies.set(name, value, {
        httpOnly: options?.httpOnly,
        maxAge: options?.maxAge / 1000, // ثانیه
        sameSite: options?.sameSite || "Lax",
        secure: options?.secure || false,
        path: "/", // بهتره مشخص کنی
      });
    });

    return res;
  } catch (error: any) {
    console.error("Login error:", error.response?.data);
    return NextResponse.json(
      { message: error.response?.data?.message || "خطایی رخ داد" },
      { status: 400 }
    );
  }
}





