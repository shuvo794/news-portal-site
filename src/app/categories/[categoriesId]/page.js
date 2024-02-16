import { getAllNews } from "@/utils/getAllNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const DynamicNews =async ({params, searchParams }) => {
    // console.log(searchParams);
    const {data:getAllDatas} =await getAllNews(searchParams.category);
    // console.log(data);
  return (
    <Box className="mt-5">
      <h2>
        Total <span className="font-bold">{searchParams.category}</span> News{" "}
        {getAllDatas.length}
      </h2>
      <Grid
        className="my-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {getAllDatas.map((news) => (
          <Grid key={news._id} item xs={6}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      src={news.thumbnail_url}
                      width={800}
                      height={100}
                      alt="HeroImage"
                    />
                  </CardMedia>

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom component="div">
                      By {news.author.name} - {news.author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + " ... "
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNews;