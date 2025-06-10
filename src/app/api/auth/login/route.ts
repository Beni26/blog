import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  // ارسال لاگین به بک‌اند
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Login failed' }, { status: res.status });
  }

  const { accessToken, refreshToken } = await res.json();

  const response = NextResponse.json({ success: true });

  // ست کردن کوکی‌ها
  response.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 15, // 15 دقیقه
    path: '/',
  });

  response.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // یک هفته
    path: '/',
  });

  return response;
}
