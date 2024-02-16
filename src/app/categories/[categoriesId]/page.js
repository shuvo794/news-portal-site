import { getAllNews } from "@/utils/getAllNews";
import { Box } from "@mui/material";

const DynamicNews =async ({params, searchParams }) => {
    // console.log(searchParams);
    const {data} =await getAllNews(searchParams.category);
    // console.log(data);
  return (
    <Box className="mt-5">
          <h2>Total {searchParams.category} News { data.length}</h2>
    </Box>
  );
};

export default DynamicNews;