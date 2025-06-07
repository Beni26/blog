import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex  flex-1 items-center justify-center ">
      <div className="w-full max-w-md p-4 border rounded-md shadow-xl border-gray-200">{children}</div>
    </div>
  );
};

export default Layout;
