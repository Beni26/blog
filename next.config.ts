import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://backend-blog-ri3t.onrender.com/uploads/**'),
      new URL('http://localhost:3000/images/**'),
      new URL(' https://blog-eta-nine-65.vercel.app/images/**')],


  },
};

export default nextConfig;
