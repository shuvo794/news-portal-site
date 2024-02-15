import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Rectangle from "../../../assets/HeroImage.png";
import topnews1 from "../../../assets/top-news1.png";
import topnews2 from "../../../assets/top-news2.png";
import topnews3 from "../../../assets/top-news3.png";
import topnews4 from "../../../assets/top-news4.png";
import Image from "next/image";
const latestNews = () => {
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={Rectangle} width={800} alt="HeroImage" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military aid for Kyiv as Ukraine marked its independence day six
                months after Russia invaded the country.The United States of
                America is committed to supporting the people of Ukraine as they
                continue the fight to defend their sovereignty. As part of that
                commitment, I am proud to announce our biggest tranche of
                security assistance to date: approximately $2. Wednesday, August
                24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
                Military, News, Russia, Security, UK, Ukraine, United States,
                Worthy News (Worthy News) – U.S. President Joe Biden has
                announced nearly $3 billion in new U.S. military aid for Kyiv as
                Ukraine marked its independence day six months after Russia
                invaded the country.The United States of America is committed to
                supporting the people of Ukraine as they continue the fight to
                defend their sovereignty. As part of that commitment, I am proud
                to announce our biggest tranche of security assistance to date:
                approximately $2.
              </Typography>
              <Typography className="bg-red-500 text-center rounded text-white my-4 p-1">
                All news in this category
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Grid
          className="my-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topnews1} alt="HeroImage" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="div">
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                    Military Aid Package Yet
                  </Typography>
                  <Typography gutterBottom component="div">
                    By Shuvo - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topnews2} alt="HeroImage" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="div">
                    Battle Analysis: Russian Tank Armada vs Ukraine
                  </Typography>
                  <Typography gutterBottom component="div">
                    By Shuvo - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topnews3} alt="HeroImage" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="div">
                    France’s Largest Business Summit to Conclude on Mar 22
                  </Typography>
                  <Typography gutterBottom component="div">
                    By Shuvo - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topnews4}  alt="HeroImage" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom component="div">
                    Marquez Explains Lack of Confidence During Qatar GP Race
                  </Typography>
                  <Typography gutterBottom component="div">
                    By Shuvo - Mar 18 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
};

export default latestNews;