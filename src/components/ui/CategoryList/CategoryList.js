import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Divider, Typography } from "@mui/material";

const CategoryList = async () => {
    const {data:allCategories} = await getAllCategories();
    // console.log(allCategories);
    return (
      <Box>
            <Typography variant="h6" >Categories</Typography>
            <Divider/>
      </Box>
    );
};

export default CategoryList;