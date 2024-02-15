import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Rectangle from "../../../assets/side-top-news.png";

const SideBar = () => {
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={Rectangle} width={800} alt="HeroImage" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography gutterBottom component="div">
                By Shuvo - Mar 18 2023
              </Typography>
              <Typography className="bg-red-500 text-center rounded text-white my-4 p-1">
                All news in this category
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
};

export default SideBar;