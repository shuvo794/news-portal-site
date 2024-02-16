import { getAllNews } from "@/utils/getAllNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

const DynamicNews =async ({params, searchParams }) => {
    // console.log(searchParams);
    const {data:getAllDatas} =await getAllNews(searchParams.category);
    // console.log(data);
  return (
    <Box className="mt-5">
      <h2>
        Total {searchParams.category} News {getAllDatas.length}
      </h2>
      <Grid
        className="my-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {getAllDatas.map((getAllData) => (
          <Grid key={getAllData._id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height:"250px"
                  }
                }}
                >
                  <Image
                    src={getAllData.thumbnail_url}
                    width={800}
                    height={100}
                    alt="HeroImage"
                  />
                </CardMedia>

                <CardContent>
                  <Typography gutterBottom component="div">
                    {getAllData.title}
                  </Typography>
                  <Typography gutterBottom component="div">
                    By {getAllData.author.name} -{" "}
                    {getAllData.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {getAllData.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNews;