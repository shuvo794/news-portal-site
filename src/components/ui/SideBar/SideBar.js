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
            <Typography>
              <p className="bg-red-500  rounded text-white my-4 p-1">
                <marquee> The Technology is new of the world</marquee>
              </p>
            </Typography>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
              </Typography>
              <Typography gutterBottom component="div">
                By Shuvo - Mar 18 2023
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
};

export default SideBar;