import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async () => {
    const {data:allCategories} = await getAllCategories();
    // console.log(allCategories);
    return (
        <div>
            <h2>Categories</h2>
        </div>
    );
};

export default CategoryList;