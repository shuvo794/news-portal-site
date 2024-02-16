import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
    const {data:allCategories} = await getAllCategories();
    // console.log(allCategories);
    return (
      <Box className="mt-4 bg-gray-100 px-2 py-5">
        <Typography variant="h6" className="text-center">
          Categories
        </Typography>
        <Divider />
        <Stack rowGap={1} sx={{ mt: 2 }}>
          {allCategories.map((categories) => (
            <Button variant="outlined" key={categories.id}>
              <Link href={`/categories/news?category=${categories.title.toLowerCase()}`}>
                {categories.title}
              </Link>
            </Button>
          ))}
        </Stack>
      </Box>
    );
};

export default CategoryList;