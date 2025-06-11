import { Metadata } from "next";
import CategoryList from "../_components/CategoryList";
import Search from "../_components/Search";

export const metadata: Metadata = {
  title: "بلاگ ها",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center mb-12 ">
        <h1 className="text-lg font-bold ">لیست بلاگ ها</h1>
        <Search />
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3  space-y-4 ">
          <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};
export default layout;
