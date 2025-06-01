import Link from "next/link";
import { Category } from "../types";



const CategoryList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  }: { data: { categories: Category[] } } = await res.json();  
  return (
    <ul className="space-y-4">
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default CategoryList;
