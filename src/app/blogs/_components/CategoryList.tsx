import Link from "next/link";
import { Category } from "./types";



const CategoryList = async () => {
  const res = await fetch(
    "https://backend-blog-ri3t.onrender.com/api/category/list"
  );
  const {
    data: { categories },
  }: { data: { categories: Category[] } } = await res.json();
  console.log(categories);
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
