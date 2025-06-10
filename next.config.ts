import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://backend-blog-ri3t.onrender.com/uploads/**'),
      new URL('http://localhost:3000/images/**'),
      new URL('http://localhost:5000/uploads/**'),
      new URL(' https://blog-eta-nine-65.vercel.app/images/**')],


  },
  logging : {
    fetches : {
    fullUrl:true,
    }
  },
 
};

export default nextConfig;
