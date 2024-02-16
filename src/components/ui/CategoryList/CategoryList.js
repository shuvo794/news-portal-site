import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const CategoryList = async () => {
    const {data:allCategories} = await getAllCategories();
    // console.log(allCategories);
    return (
      <Box>
        <Typography variant="h6">Categories</Typography>
        <Divider />
        <Stack rowGap={1} sx={{mt:2}}>
          {allCategories.map((categories) => (
            <Button variant="outlined" key={categories.id}>
              {categories.title}
            </Button>
          ))}
        </Stack>
      </Box>
    );
};

export default CategoryList;