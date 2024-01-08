import { getAllCategories } from "@/utils/getAllCategories";
import Link from "next/link";

const CategoryList = async () => {
  const { data: categoryList } = await getAllCategories();
  console.log(categoryList);
  return (
    <div>
      <h1 className=" text-2xl font-semibold">Categories</h1>
      <div className=" flex flex-col gap-3 mt-3">
        {categoryList.map((category) => (
          <Link
            href={`/categories/news?category=${category.title.toLowerCase()}`}
            className=" btn btn-outline"
            key={category.id}
          >
            {/* <Link href={category.title}> {category.title}</Link> */}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
