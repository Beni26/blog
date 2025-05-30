import { Metadata } from "next";
import CategoryList from "./_components/CategoryList";

export const metadata:Metadata = {
  title:"بلاگ ها"
}
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-12">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3  space-y-4 ">
          <CategoryList  />
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
};
export default layout;
