import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
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
              <p className="bg-[#192a56]  rounded text-white my-4 p-1">
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
        <Box>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Image src={Rectangle} alt="" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid className="my-6" item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Mar 18 2023{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
};

export default SideBar;