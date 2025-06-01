"use client"
import { useEffect } from "react";
type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("🔥 Error caught by error.tsx:", error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        مشکلی پیش اومد 😢
      </h2>
      <p className="text-gray-500 mb-6">
        متأسفیم! در بارگذاری محتوا خطایی رخ داد. لطفاً دوباره تلاش کنید یا صفحه
        را رفرش کنید.
      </p>
      <button
        onClick={() => reset()}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        تلاش دوباره
      </button>
    </div>
  );
};
export default Error;
